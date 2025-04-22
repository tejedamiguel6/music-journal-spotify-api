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
      <ul>
        <Link href="/">BLOG</Link>
      </ul>
      <ul>
        <Link href="/music-journal">MUSIC</Link>
      </ul>
      <ul>
        <Link href="/">ABOUT</Link>
      </ul>
    </nav>
  );
}
