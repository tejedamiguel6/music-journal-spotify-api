import Image from "next/image";
import { fetchArtistHistory } from "@/app/music-journal/top-items/[...slug]/action";
import styles from "./agent-artist-stat-table.module.css";

/* — tiny helpers — */
function Th({ children }: { children: React.ReactNode }) {
  return <th className={styles.th}>{children}</th>;
}
function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statLabel}>{label}:</span>{" "}
      <span className={styles.statValue}>{value}</span>
    </div>
  );
}

export default async function ArtistStatsTable({
  artistName, // or artistId – whatever your route passes down
}: {
  artistName: string;
}) {
  /* 1 – get the data */
  const {
    artist,
    tracks,
    totalPlays,
    uniqueTracks,
    uniqueAlbums,
    dateRange,
    error,
  } = await fetchArtistHistory(artistName);

  /* 2 – handle error / empty */
  if (error) return <p className={styles.errorText}>{error}</p>;
  if (!tracks?.length)
    return (
      <p className={styles.noDataText}>No plays recorded for this artist.</p>
    );

  /* 3 – render */
  return (
    <section className={styles.container}>
      {/* headline */}
      <h1 className={styles.headline}>
        Listening history for{" "}
        <span className={styles.artistName}>{artist}</span>
      </h1>

      {/* stat-bar */}
      <div className={styles.statBar}>
        <Stat label="Total plays" value={totalPlays} />
        <Stat label="Unique tracks" value={uniqueTracks} />
        <Stat label="Unique albums" value={uniqueAlbums} />
        <Stat
          label="Date range"
          value={`${new Date(
            dateRange?.from,
          )?.toLocaleDateString()} – ${new Date(
            dateRange?.to,
          )?.toLocaleDateString()}`}
        />
      </div>

      {/* table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeader}>
              <Th>Track</Th>
              <Th>Album</Th>
              <Th>Play count</Th>
              <Th>Last played</Th>
              <th className={styles.thEmpty}></th>
            </tr>
          </thead>

          <tbody>
            {tracks.map((t) => (
              <tr key={t.track} className={styles.tableRow}>
                <td className={styles.td}>{t.track}</td>
                <td className={styles.td}>{t.album}</td>
                <td className={styles.tdCenter}>{t.play_count}</td>
                <td className={styles.td}>
                  {new Date(t.played_at).toLocaleDateString()}
                </td>
                <td className={styles.td}>
                  <Image
                    src={t.album_cover_url}
                    alt=""
                    width={48}
                    height={48}
                    className={styles.albumCover}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
