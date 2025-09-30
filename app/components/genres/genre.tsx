"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./genres.module.css";
import createSlug from "@/app/lib/utils/create-slug";

export default function Genre({ genre }) {
  const [showAll, setShowAll] = useState(false);

  const genreList = genre.itemGenresCollection.items[0]?.genres ?? [];

  const visibleGenres = showAll ? genreList : genreList.slice(0, 20);

  return (
    <>
      <div className={styles.container}>
        {visibleGenres.map((genre: string) => (
          <div key={genre} className={styles.genreContainer}>
            <Link
              href={`/music-journal/my-collection/${createSlug(
                genre
              )}?genre=${encodeURIComponent(genre)}`}
            >
              <h3 className={styles.genres}>{genre}</h3>
            </Link>
          </div>
        ))}
      </div>

      {genreList.length > 10 && (
        <div className={styles.button}>
          <button onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? "Show Less" : "Show All "}
          </button>
        </div>
      )}
    </>
  );
}
