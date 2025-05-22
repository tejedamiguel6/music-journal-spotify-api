"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./user-top-track.module.css";
import createSlug from "@/app/lib/utils/create-slug";

export default function TopTracks({ userTopItemsData }) {
  const block = userTopItemsData?.blockTopArtistsCollection?.items?.[0];
  const tracks = block?.topArtists?.items ?? [];

  const [groupedArtists, setGroupedArtists] = useState({});

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

  return (
    <div className={styles.tracksContainer}>
      {Object.entries(groupedArtists).map(([artistId, tracks]) => {
        const firstTrack = tracks[0];
        const artistName = firstTrack?.artists[0]?.name;
        const albumArt = firstTrack?.album?.images?.[0]?.url;

        return (
          <div key={artistId} className={styles.artistSection}>
            <h2>{artistName}</h2>

            {albumArt && (
              <Image
                src={albumArt}
                width={100}
                height={100}
                alt={`${artistName} album art`}
              />
            )}

            <ul>
              {tracks.map((track) => (
                <li key={track.id}>{track.name}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
