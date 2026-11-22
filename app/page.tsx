import styles from "./page.module.css";
import TopArtists from "@/app/components/top-artists/top-artists";
import ChokerSpacer from "@/app/components/choker-spacer/choker-spacer";
import Genres from "@/app/components/genres/genres";
import Masthead from "@/app/components/masthead/masthead";
import NowHero from "@/app/components/now-hero/now-hero";
import { typewriter } from "@/app/lib/fonts";

export default async function Page() {
  return (
    <div className={`container mx-auto ${styles.container}`}>
      <Masthead ornament={<ChokerSpacer className={styles.ornament} />} />

      <NowHero />

      <section className={styles.content}>
        <h2 className={`${styles.sectionLabel} ${typewriter.className}`}>
          Top artists
        </h2>
        <TopArtists />
      </section>

      <Genres />
    </div>
  );
}
