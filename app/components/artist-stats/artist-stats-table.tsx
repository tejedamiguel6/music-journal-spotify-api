import Image from "next/image";
import { fetchArtistHistory } from "@/app/music-journal/top-items/[...slug]/action";
import { typewriter } from "@/app/lib/fonts";
import { parseDbTimestamp } from "@/app/lib/utils/db-date";
import styles from "./artist-stats-table.module.css";

const numberFormat = new Intl.NumberFormat("en-US");
const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "America/Denver",
});

/** "Nov 14, 2026", or "–" for a missing/invalid date. */
function formatDate(value: unknown) {
  const date = parseDbTimestamp(value);
  return date ? dateFormat.format(date) : "–";
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className={styles.stat}>
      <dt className={`${styles.statLabel} ${typewriter.className}`}>{label}</dt>
      <dd className={styles.statValue}>{value}</dd>
    </div>
  );
}

interface TrackRow {
  track: string;
  album: string;
  album_cover_url: string | null;
  played_at: string;
  play_count: number;
}

export default async function ArtistStatsTable({
  artistName,
}: {
  artistName: string;
}) {
  const result = await fetchArtistHistory(artistName);

  if ("error" in result)
    return <p className={styles.message}>Couldn&apos;t load listening history.</p>;

  const { tracks, totalPlays, uniqueTracks, uniqueAlbums, dateRange } = result;
  if (!tracks?.length)
    return <p className={styles.message}>No plays recorded for this artist yet.</p>;

  return (
    <section className={styles.container}>
      <h2 className={`${styles.label} ${typewriter.className}`}>Listening history</h2>

      <dl className={styles.stats}>
        <Stat label="Plays" value={numberFormat.format(totalPlays)} />
        <Stat label="Tracks" value={numberFormat.format(uniqueTracks)} />
        <Stat label="Albums" value={numberFormat.format(uniqueAlbums)} />
        <Stat label="First logged" value={formatDate(dateRange?.from)} />
        <Stat label="Last played" value={formatDate(dateRange?.to)} />
      </dl>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={typewriter.className}>
            <tr>
              <th scope="col">Track</th>
              <th scope="col" className={styles.albumCol}>Album</th>
              <th scope="col" className={styles.numeric}>Plays</th>
              <th scope="col" className={styles.dateCol}>Last played</th>
            </tr>
          </thead>
          <tbody>
            {(tracks as TrackRow[]).map((t) => (
              <tr key={`${t.track}-${t.album}`}>
                <td>
                  <span className={styles.trackCell}>
                    {t.album_cover_url ? (
                      <Image
                        src={t.album_cover_url}
                        alt=""
                        width={40}
                        height={40}
                        className={styles.cover}
                      />
                    ) : (
                      <span className={styles.cover} aria-hidden />
                    )}
                    <span className={styles.trackName}>{t.track}</span>
                  </span>
                </td>
                <td className={styles.albumCol}>{t.album}</td>
                <td className={`${styles.numeric} ${typewriter.className}`}>
                  {t.play_count ? numberFormat.format(t.play_count) : "–"}
                </td>
                <td className={`${styles.dateCol} ${typewriter.className}`}>
                  {formatDate(t.played_at)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
