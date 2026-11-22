import type { ReactNode } from "react";
import { typewriter } from "@/app/lib/fonts";
import styles from "./masthead.module.css";

const TIME_ZONE = "America/Denver";

function issueLine(now: Date) {
  const month = Number(
    new Intl.DateTimeFormat("en-US", { month: "numeric", timeZone: TIME_ZONE }).format(now)
  );
  const monthYear = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: TIME_ZONE,
  }).format(now);
  return { issue: `No. ${String(month).padStart(2, "0")}`, monthYear };
}

/**
 * Zine-style masthead: issue line between thin rules, a big title, and an ornament (the Contentful chain image) underneath.
 */
export default function Masthead({ ornament }: { ornament?: ReactNode }) {
  const { issue, monthYear } = issueLine(new Date());

  return (
    <header className={styles.masthead}>
      <div className={`${styles.issueBar} ${typewriter.className}`}>
        <span>{issue}</span>
        <span className={styles.tagline}>A record of what I listen to</span>
        <span>{monthYear}</span>
      </div>

      {/* Almendra (the site font, set in the root layout), same as the genre tags */}
      <h1 className={styles.title}>Music Journal</h1>

      {ornament && <div className={styles.ornament}>{ornament}</div>}
    </header>
  );
}
