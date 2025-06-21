import Image from "next/image";
import Link from "next/link";
import createSlug from "@/app/lib/utils/create-slug";
import styles from "./user-top-item.module.css";
import { fetchGraphQL } from "@/app/lib/contentful-api";

type userTopArtistProps = {
  limit: number;
  className: string;
};

export default async function UserTopArtists({
  limit,
  className,
}: userTopArtistProps) {
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
        .map((item, index) => {
          console.log(item, "<----this item");
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
