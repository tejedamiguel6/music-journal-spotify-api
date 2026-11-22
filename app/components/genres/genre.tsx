"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./genres.module.css";
import createSlug from "@/app/lib/utils/create-slug";
import { typewriter } from "@/app/lib/fonts";

const INITIAL_COUNT = 20;
const TIER_CLASSES = [styles.tier1, styles.tier2, styles.tier3, styles.tier4, styles.tier5];
const playsFormat = new Intl.NumberFormat("en-US");

/**
 * Size 1–5 from the square root of plays relative to the most-played genre.
 * Square root (rather than linear) keeps mid-sized genres from shrinking to
 * nothing next to one with thousands of plays, while still separating the top.
 */
function tierFor(plays: number, maxPlays: number) {
  if (plays <= 0 || maxPlays <= 0) return 0;
  const ratio = Math.sqrt(plays / maxPlays);
  return Math.min(TIER_CLASSES.length - 1, Math.floor(ratio * TIER_CLASSES.length));
}

export default function Genre({
  genres,
  plays,
}: {
  genres: string[];
  /** Lowercased genre name → recorded plays */
  plays: Record<string, number>;
}) {
  const [showAll, setShowAll] = useState(false);

  const ranked = genres
    .map((name, order) => ({ name, order, plays: plays[name.trim().toLowerCase()] ?? 0 }))
    // Most played first; ties keep the Contentful order
    .sort((a, b) => b.plays - a.plays || a.order - b.order);

  const maxPlays = ranked[0]?.plays ?? 0;
  const visible = showAll ? ranked : ranked.slice(0, INITIAL_COUNT);

  return (
    <>
      <ul className={styles.container}>
        {visible.map(({ name, plays: count }) => (
          <li key={name}>
            <Link
              className={`${styles.genre} ${TIER_CLASSES[tierFor(count, maxPlays)]} ${
                count === 0 ? styles.unplayed : ""
              }`}
              href={`/music-journal/my-collection/${createSlug(name)}?genre=${encodeURIComponent(name)}`}
              title={count ? `${playsFormat.format(count)} plays` : "No plays recorded"}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {ranked.length > INITIAL_COUNT && (
        <button
          className={`${styles.toggle} ${typewriter.className}`}
          onClick={() => setShowAll((prev) => !prev)}
          aria-expanded={showAll}
        >
          {showAll ? "Show fewer" : `Show all ${ranked.length}`}
        </button>
      )}
    </>
  );
}
