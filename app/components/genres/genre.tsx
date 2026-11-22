import Link from "next/link";
import styles from "./genres.module.css";
import createSlug from "@/app/lib/utils/create-slug";
import { typewriter } from "@/app/lib/fonts";

const PREVIEW_COUNT = 20;
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
  variant = "preview",
}: {
  genres: string[];
  /** Lowercased genre name → recorded plays */
  plays: Record<string, number>;
  /**
   * "preview" (homepage): the top genres plus a link to the full index.
   * "index" (My Collection): every genre, with its play count shown.
   */
  variant?: "preview" | "index";
}) {
  const ranked = genres
    .map((name, order) => ({ name, order, plays: plays[name.trim().toLowerCase()] ?? 0 }))
    // Most played first; ties keep the Contentful order
    .sort((a, b) => b.plays - a.plays || a.order - b.order);

  const maxPlays = ranked[0]?.plays ?? 0;
  const isIndex = variant === "index";
  const visible = isIndex ? ranked : ranked.slice(0, PREVIEW_COUNT);

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
              {isIndex && count > 0 && (
                <span className={`${styles.count} ${typewriter.className}`}>
                  {playsFormat.format(count)}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {!isIndex && ranked.length > PREVIEW_COUNT && (
        <Link
          className={`${styles.toggle} ${typewriter.className}`}
          href="/music-journal/my-collection"
        >
          All {ranked.length} genres →
        </Link>
      )}
    </>
  );
}
