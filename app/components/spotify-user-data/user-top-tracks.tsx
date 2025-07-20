"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./user-top-track.module.css";

export default function TopTracks({ userTopItemsData }) {
  const [groupedArtists, setGroupedArtists] = useState({});
  const [expandedMap, setExpandedMap] = useState({});

  const block = userTopItemsData?.blockTopArtistsCollection?.items?.[0];
  const tracks = block?.topArtists?.items ?? [];

  useEffect(() => {
    if (!Array.isArray(tracks) || tracks.length === 0) return;

    const grouped = tracks.reduce((acc, track) => {
      const artistId = track.artists?.[0]?.id;
      if (!artistId) return acc;

      if (!acc[artistId]) {
        acc[artistId] = [];
      }

      acc[artistId].push(track);
      return acc;
    }, {});

    setGroupedArtists(grouped);
  }, [tracks]);

  const toggleExpanded = (artistId) => {
    setExpandedMap((prev) => ({
      ...prev,
      [artistId]: !prev[artistId],
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.tracksContainer}>
        {Object.entries(groupedArtists).map(([artistId, tracks]) => {
          const firstTrack = tracks[0];
          const artistName = firstTrack?.artists[0]?.name;
          const albumArt = firstTrack?.album?.images?.[0]?.url;
          const isExpanded = expandedMap[artistId];
          const visibleTracks = isExpanded ? tracks : tracks.slice(0, 5);

          return (
            <div key={artistId} className={styles.artistSection}>
              <div className={styles.artistsTitle}>
                <h2>{artistName}</h2>
              </div>

              {albumArt && (
                <Image
                  className={styles.albumArtImage}
                  src={albumArt}
                  width={100}
                  height={100}
                  alt={`${artistName} album art`}
                />
              )}

              <ul
                className={`${styles.trackItemContainer} ${
                  expandedMap[artistId] ? styles.expanded : ""
                }`}
              >
                {visibleTracks.map((track) => (
                  <li key={track.id}>{track.name}</li>
                ))}
              </ul>

              {tracks.length > 4 && (
                <button
                  className={styles.toggleButton}
                  onClick={() => toggleExpanded(artistId)}
                >
                  {expandedMap[artistId]
                    ? "Show Less"
                    : `Show ${tracks.length - 5} more`}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
