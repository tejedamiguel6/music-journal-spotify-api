"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { typewriter } from "@/app/lib/fonts";
import styles from "./navigation.module.css";

const LINKS = [
  { href: "/music-journal/calendar", label: "Calendar" },
  { href: "/music-journal/my-collection", label: "My collection" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={`${styles.nav} ${typewriter.className}`} aria-label="Main">
      <Link href="/" className={styles.home} aria-current={pathname === "/" ? "page" : undefined}>
        Music Journal
      </Link>
      <ul className={styles.links}>
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={styles.link}
              aria-current={pathname.startsWith(href) ? "page" : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
