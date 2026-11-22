import styles from "./navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className={styles.navigationContainer}>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
      </ul>
      <ul className={styles.links}>
        <li>
          <Link href="/music-journal/calendar">CALENDAR</Link>
        </li>
        <li>
          <Link href="/music-journal/my-collection">MY COLLECTION</Link>
        </li>
      </ul>
    </nav>
  );
}
