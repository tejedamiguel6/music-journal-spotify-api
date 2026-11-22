import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import createSlug from "@/app/lib/utils/create-slug";
import styles from "./top-artists.module.css";
import { fetchGraphQL } from "@/app/lib/contentful-api";
import { getArtistPlayCounts, getFirstRecordedPlay } from "@/app/lib/db/queries";
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
const sinceFormat = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "America/Denver",
});

/**
 * Editorial artist grid, ranked by plays recorded in the database (the same
 * numbers shown on each tile). The candidates come from the Contentful
 * list, whose own order only breaks ties. If the database is unreachable
 * the grid falls back to the Contentful order without counts or ranks.
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
  const candidates: TopArtistItem[] =
    data.blockTopArtistsCollection.items[0].topArtists.items ?? [];

  let plays: Map<string, number> | null = null;
  let since: Date | null = null;
  try {
    [plays, since] = await Promise.all([
      getArtistPlayCounts(candidates.map((artist) => artist.name)),
      getFirstRecordedPlay(),
    ]);
  } catch (error) {
    console.error("Couldn't load artist play counts", error);
  }

  const playsFor = (artist: TopArtistItem) =>
    plays?.get(artist.name.toLowerCase()) ?? 0;

  const artists = (
    plays
      ? candidates
          .map((artist, order) => ({ artist, order }))
          // Most played first; ties keep the Contentful order
          .sort((a, b) => playsFor(b.artist) - playsFor(a.artist) || a.order - b.order)
          .map(({ artist }) => artist)
      : candidates
  ).slice(0, limit);

  return (
    <>
      <header className={styles.header}>
        <h2 className={`${styles.label} ${typewriter.className}`}>Most played artists</h2>
        {since && (
          <p className={`${styles.since} ${typewriter.className}`}>
            Plays since {sinceFormat.format(since)}
          </p>
        )}
      </header>
    <ol className={styles.grid}>
      {artists.map((artist, index) => {
        const featured = index === 0;
        const image = artist.images?.[0] ?? artist.album?.images?.[0];
        const playCount = plays ? playsFor(artist) : undefined;

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
              {plays && (
                <span className={`${styles.rank} ${typewriter.className}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
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
    </>
  );
}
