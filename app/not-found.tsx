import Link from "next/link";
import { typewriter } from "@/app/lib/fonts";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[1120px] flex-col items-center justify-center px-4 text-center">
      <p
        className={`${typewriter.className} text-sm uppercase tracking-[0.2em]`}
        style={{ color: "var(--accent-olive)" }}
      >
        No. 404
      </p>
      <h1
        className="mt-4 text-5xl leading-tight sm:text-6xl"
        style={{ color: "var(--ink-cream)" }}
      >
        This page isn&apos;t in the journal
      </h1>
      <Link
        href="/"
        className={`${typewriter.className} mt-8 border-b border-current text-sm uppercase tracking-[0.2em]`}
        style={{ color: "var(--accent-olive)" }}
      >
        ← Back to the front page
      </Link>
    </main>
  );
}
