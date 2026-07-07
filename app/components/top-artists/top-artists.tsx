import Image from "next/image";
import Link from "next/link";
import createSlug from "@/app/lib/utils/create-slug";
import styles from "./top-artists.module.css";
import { fetchGraphQL } from "@/app/lib/contentful-api";

interface TopArtistItem {
  id: string;
  name: string;
  images: Array<{ url: string; width: number; height: number }>;
}

type TopArtistsProps = {
  limit: number;
  className?: string;
};

export default async function TopArtists({ limit, className }: TopArtistsProps) {
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
          return (
            <div key={item.id}>
              <Link href={`/music-journal/top-items/${slug}?id=${item.id}`}>
                <Image
                  className={styles.albumImage}
                  src={item.images[0]?.url}
                  width={item.images[0].width}
                  height={item.images[0].height}
                  alt={`album art cover for track ${item.name}`}
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
