"use client";

import { useState } from "react";
import Image from "next/image";
import useListeningCalendar, {
  CalendarDay,
} from "@/app/hooks/use-listening-calendar";
import styles from "./listening-calendar.module.css";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MONTH_LABEL = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

function formatMinutes(totalMs: number): string {
  const minutes = Math.round(totalMs / 60000);
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ${minutes % 60}m`;
}

function DayCell({ dayNumber, day }: { dayNumber: number; day: CalendarDay }) {
  return (
    <div className={`${styles.cell} ${styles.dayCell}`} tabIndex={0}>
      <span className={styles.dayNumber}>{dayNumber}</span>
      {day.album_cover_url && (
        <Image
          src={day.album_cover_url}
          alt={`${day.top_track_name} by ${day.top_artist_name}`}
          fill
          sizes="(max-width: 1280px) 14vw, 190px"
          className={styles.cover}
        />
      )}
      <div className={styles.tooltip}>
        <span className={styles.tooltipTrack}>{day.top_track_name}</span>
        <span className={styles.tooltipArtist}>{day.top_artist_name}</span>
        <span className={styles.tooltipStats}>
          {day.play_count} {day.play_count === 1 ? "play" : "plays"} ·{" "}
          {formatMinutes(day.total_ms)}
        </span>
      </div>
    </div>
  );
}

export default function ListeningCalendar() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth()); // 0-indexed

  const { dayMap, error, isLoading } = useListeningCalendar(year, month);

  const isCurrentMonth =
    year === now.getFullYear() && month === now.getMonth();

  const goToPreviousMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const goToNextMonth = () => {
    if (isCurrentMonth) return;
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className={styles.container}>
      <div className={styles.monthBar}>
        <button
          className={styles.navButton}
          onClick={goToPreviousMonth}
          aria-label="Previous month"
        >
          ←
        </button>
        <h2 className={styles.monthLabel}>
          {MONTH_LABEL.format(new Date(year, month, 1))}
        </h2>
        <button
          className={styles.navButton}
          onClick={goToNextMonth}
          disabled={isCurrentMonth}
          aria-label="Next month"
        >
          →
        </button>
      </div>

      <div className={styles.weekdays}>
        {WEEKDAYS.map((weekday) => (
          <span key={weekday}>{weekday}</span>
        ))}
      </div>

      {error ? (
        <p className={styles.errorText}>
          Couldn&apos;t load listening history. Try again later.
        </p>
      ) : (
        <div className={styles.grid}>
          {Array.from({ length: firstWeekday }, (_, i) => (
            <div key={`pad-${i}`} className={`${styles.cell} ${styles.emptyCell}`} />
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const dayNumber = i + 1;
            const day = dayMap.get(`${year}-${pad(month + 1)}-${pad(dayNumber)}`);
            return day ? (
              <DayCell key={dayNumber} dayNumber={dayNumber} day={day} />
            ) : (
              <div
                key={dayNumber}
                className={`${styles.cell} ${styles.silentCell}`}
              >
                <span className={styles.dayNumber}>{dayNumber}</span>
              </div>
            );
          })}
        </div>
      )}

      {isLoading && !error && (
        <p className={styles.statusText}>Loading…</p>
      )}
    </section>
  );
}
