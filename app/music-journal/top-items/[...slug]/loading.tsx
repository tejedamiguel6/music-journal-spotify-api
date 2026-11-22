import { typewriter } from "@/app/lib/fonts";

export default function Loading() {
  return (
    <p
      className={`${typewriter.className} py-16 text-center text-sm uppercase tracking-[0.2em] opacity-70`}
      role="status"
    >
      Loading listening history…
    </p>
  );
}
