import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import createSlug from "@/app/lib/utils/create-slug";
import styles from "./top-artists.module.css";
import { fetchGraphQL } from "@/app/lib/contentful-api";
import { getArtistPlayCounts } from "@/app/lib/db/queries";
import { typewriter } from "@/app/lib/fonts";

interface SpotifyImage {
  url: string;
  width: number;
  height: number;
}

// The Contentful topArtists JSON can hold artist objects (images on the
// item) or track objects (images on the album).
interface TopArtistItem {
  id: string;
  name: string;
  images?: SpotifyImage[];
  album?: { images?: SpotifyImage[] };
}

type TopArtistsProps = {
  /** 13 fills the grid exactly: the #1 artist takes 2×2, plus 12 tiles. */
  limit?: number;
};

const playsFormat = new Intl.NumberFormat("en-US");

/**
 * Editorial artist grid. Ranking comes from the Contentful list; the play
 * counts underneath are all-time plays recorded in the database.
 */
export default async function TopArtists({ limit = 13 }: TopArtistsProps) {
  // Play counts are live, so render this per request instead of at build time
  await connection();

  const query = `
  query GETJSON {
    blockTopArtistsCollection {
      items {
        title
        topArtists
      }
    }
  }
  `;

  const { data } = await fetchGraphQL(query);
  const artists: TopArtistItem[] =
    data.blockTopArtistsCollection.items[0].topArtists.items?.slice(0, limit) ?? [];

  // The grid still renders (without counts) if the database is unreachable
  let plays = new Map<string, number>();
  try {
    plays = await getArtistPlayCounts(artists.map((artist) => artist.name));
  } catch (error) {
    console.error("Couldn't load artist play counts", error);
  }

  return (
    <ol className={styles.grid}>
      {artists.map((artist, index) => {
        const featured = index === 0;
        const image = artist.images?.[0] ?? artist.album?.images?.[0];
        const playCount = plays.get(artist.name.toLowerCase());

        return (
          <li key={artist.id} className={featured ? styles.featured : undefined}>
            <Link
              className={styles.card}
              href={`/music-journal/top-items/${createSlug(artist.name)}?id=${artist.id}`}
            >
              <Image
                className={styles.photo}
                src={image?.url || "/placeholder.svg"}
                alt={`Photo of ${artist.name}`}
                fill
                sizes={featured ? "(max-width: 640px) 100vw, 560px" : "(max-width: 640px) 50vw, 280px"}
                priority={featured}
              />
              <span className={`${styles.rank} ${typewriter.className}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.caption}>
                <span className={styles.name}>{artist.name}</span>
                {playCount !== undefined && (
                  <span className={`${styles.plays} ${typewriter.className}`}>
                    {playsFormat.format(playCount)} plays
                  </span>
                )}
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
