import { connection } from "next/server";
import styles from "./genres.module.css";
import { fetchGraphQL } from "@/app/lib/contentful-api";
import { getGenrePlayCounts } from "@/app/lib/db/queries";
import { typewriter } from "@/app/lib/fonts";

import Genre from "./genre";

export default async function Genres({
  variant = "preview",
}: {
  /** "preview" on the homepage, "index" on My Collection (see genre.tsx) */
  variant?: "preview" | "index";
} = {}) {
  // Play counts are live, so render this per request instead of at build time
  await connection();

  const generes = `
  query GENRES {
  itemGenresCollection {
    items {
      title
      genres
    }
  }
}`;
  const { data } = await fetchGraphQL(generes);
  const item = data.itemGenresCollection.items[0];

  // Still renders (in Contentful order, one size) if the database is unreachable
  let plays: Record<string, number> = {};
  try {
    plays = Object.fromEntries(await getGenrePlayCounts());
  } catch (error) {
    console.error("Couldn't load genre play counts", error);
  }

  return (
    <section className={styles.section}>
      <h2 className={`${styles.title} ${typewriter.className}`}>{item.title}</h2>
      <Genre genres={item.genres ?? []} plays={plays} variant={variant} />
    </section>
  );
}
