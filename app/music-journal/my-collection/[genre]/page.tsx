import { fetchAGenre } from "../../../lib/db-request/get-genres";
import Image from "next/image";
import styles from "./page.module.css";

export default async function Page({
  params,
  searchParams
}: {
  params: Promise<{ genre: string }>;
  searchParams: Promise<{ genre?: string }>;
}) {
  // Use the query parameter if available, otherwise fall back to slug conversion
  const paramsResolved = await params;
  const searchParamsResolved = await searchParams;
  const genre = searchParamsResolved.genre || paramsResolved.genre.replace(/-/g, " ");
  console.log("@@genre", genre);

  const userGenresResults = await fetchAGenre(genre);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Artists in {genre}</h1>

      <div className={styles.artistsGrid}>
        {userGenresResults
          ? userGenresResults.artists.map((item, index) => {
              return (
                <div key={index} className={styles.artistCard}>
                  <Image
                    className={styles.artistImage}
                    src={item.artist_image_url}
                    width={300}
                    height={300}
                    alt={`Artist image for ${item.artist_name}`}
                  />
                  <h3 className={styles.artistName}>{item.artist_name}</h3>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
