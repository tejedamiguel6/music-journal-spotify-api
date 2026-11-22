import styles from "./page.module.css";
import TopArtists from "@/app/components/top-artists/top-artists";
import ChokerSpacer from "@/app/components/choker-spacer/choker-spacer";
import Genres from "@/app/components/genres/genres";
import Masthead from "@/app/components/masthead/masthead";
import NowHero from "@/app/components/now-hero/now-hero";

export default async function Page() {
  return (
    <div className={`container mx-auto ${styles.container}`}>
      <Masthead ornament={<ChokerSpacer className={styles.ornament} />} />

      <NowHero />

      <section className={styles.content}>
        <TopArtists />
      </section>

      <Genres />
    </div>
  );
}
