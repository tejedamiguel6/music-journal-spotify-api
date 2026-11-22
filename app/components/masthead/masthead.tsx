import type { ReactNode } from "react";
import { typewriter } from "@/app/lib/fonts";
import { getFirstRecordedPlay } from "@/app/lib/db/queries";
import styles from "./masthead.module.css";

const TIME_ZONE = "America/Denver";

/** Who keeps the journal. Shown in the byline under the title. */
const AUTHOR = "Miguel Tejeda";

const sinceFormat = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: TIME_ZONE,
});

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
export default async function Masthead({ ornament }: { ornament?: ReactNode }) {
  const { issue, monthYear } = issueLine(new Date());

  // The byline still renders (without the date) if the database is unreachable
  let since: Date | null = null;
  try {
    since = await getFirstRecordedPlay();
  } catch (error) {
    console.error("Couldn't load the first recorded play", error);
  }

  return (
    <header className={styles.masthead}>
      <div className={`${styles.issueBar} ${typewriter.className}`}>
        <span>{issue}</span>
        <span className={styles.tagline}>A record of what I listen to</span>
        <span>{monthYear}</span>
      </div>

      {/* Almendra (the site font, set in the root layout), same as the genre tags */}
      <h1 className={styles.title}>Music Journal</h1>

      <p className={`${styles.byline} ${typewriter.className}`}>
        Kept by {AUTHOR}
        {since && <> · every play logged since {sinceFormat.format(since)}</>}
      </p>

      {ornament && <div className={styles.ornament}>{ornament}</div>}
    </header>
  );
}
