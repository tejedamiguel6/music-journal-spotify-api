import Image from "next/image";
import Link from "next/link";
import createSlug from "@/app/lib/utils/create-slug";
import styles from "./top-artists.module.css";
import { fetchGraphQL } from "@/app/lib/contentful-api";

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
  limit: number;
  className?: string;
};

export default async function TopArtists({
  limit,
  className,
}: TopArtistsProps) {
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

  return (
    <div className={`${styles.gridContainer} ${className || ""}`}>
      {data.blockTopArtistsCollection.items[0].topArtists.items
        ?.slice(0, limit)
        .map((item: TopArtistItem) => {
          const slug = createSlug(item.name);
          const image = item.images?.[0] ?? item.album?.images?.[0];
          return (
            <div key={item.id}>
              <Link href={`/music-journal/top-items/${slug}?id=${item.id}`}>
                <Image
                  className={styles.albumImage}
                  src={image?.url || "/placeholder.svg"}
                  width={image?.width || 300}
                  height={image?.height || 300}
                  alt={`artist image for ${item.name}`}
                />
              </Link>

              <div className="text-center p-4">
                <h3>{item.name}</h3>
              </div>
            </div>
          );
        })}
    </div>
  );
}
