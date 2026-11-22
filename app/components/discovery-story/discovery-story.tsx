import { fetchArtistHistory } from "@/app/music-journal/top-items/[...slug]/action";
import { getFirstRecordedPlay } from "@/app/lib/db/queries";
import { parseDbTimestamp } from "@/app/lib/utils/db-date";
import { typewriter } from "@/app/lib/fonts";
import styles from "./discovery-story.module.css";

const TIME_ZONE = "America/Denver";
const numberFormat = new Intl.NumberFormat("en-US");
const dayFormat = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: TIME_ZONE,
});
const monthFormat = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: TIME_ZONE,
});

/**
 * If an artist's first recorded play falls this close to the start of the
 * whole journal, they were probably already a favorite before logging began,
 * so "first heard" would be misleading.
 */
const ALREADY_PLAYING_WINDOW_MS = 14 * 24 * 60 * 60 * 1000;

/** A track needs at least this many plays to be called "on repeat". */
const ON_REPEAT_MIN_PLAYS = 5;

const plural = (n: number, word: string) =>
  `${numberFormat.format(n)} ${word}${n === 1 ? "" : "s"}`;

/**
 * A short, automatically written story of how this artist entered the
 * journal: the first logged play (and which song), how much they've been
 * played since, and the track on repeat. Every line comes from recorded
 * plays, and it says "entered the journal" rather than "first heard"
 * because logging only shows when a play was recorded, not when you
 * actually discovered the artist.
 */
export default async function DiscoveryStory({ artistName }: { artistName?: string }) {
  if (!artistName) return null;

  const [history, journalStart] = await Promise.all([
    fetchArtistHistory(artistName),
    getFirstRecordedPlay().catch(() => null),
  ]);

  if ("error" in history || !history.totalPlays) return null;

  const firstPlay = parseDbTimestamp(history.dateRange?.from);
  if (!firstPlay) return null;

  const alreadyPlaying =
    journalStart !== null &&
    firstPlay.getTime() - journalStart.getTime() < ALREADY_PLAYING_WINDOW_MS;

  const firstTrack = history.firstTrack?.track;
  const topTrack = history.tracks[0];

  const lines: React.ReactNode[] = [];

  if (alreadyPlaying) {
    lines.push(
      <>Already on rotation when the journal began in {monthFormat.format(journalStart!)}.</>
    );
  } else {
    lines.push(
      <>
        Entered the journal on {dayFormat.format(firstPlay)}
        {firstTrack && (
          <>
            , with <em>“{firstTrack}”</em>
          </>
        )}
        .
      </>
    );
  }

  lines.push(
    <>
      {plural(history.totalPlays, "play")} since, across{" "}
      {plural(history.uniqueTracks, "song")} and {plural(history.uniqueAlbums, "album")}.
    </>
  );

  if (topTrack && topTrack.play_count >= ON_REPEAT_MIN_PLAYS) {
    lines.push(
      <>
        On repeat: <em>“{topTrack.track}”</em>, {plural(topTrack.play_count, "play")}.
      </>
    );
  }

  return (
    <aside className={styles.story} aria-label={`How ${artistName} entered the journal`}>
      <p className={`${styles.label} ${typewriter.className}`}>Discovery</p>
      {lines.map((line, i) => (
        <p key={i} className={styles.line}>
          {line}
        </p>
      ))}
    </aside>
  );
}
