import styles from "./page.module.css";
import TopArtists from "@/app/components/top-artists/top-artists";
import ChokerSpacer from "@/app/components/choker-spacer/choker-spacer";
import Genres from "@/app/components/genres/genres";

export default async function Page() {
  return (
    <div className={`container mx-auto ${styles.container}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Music Journal</h1>
      </div>

      <div className={styles.content}>
        <TopArtists limit={12} className={styles.artistsGrid} />
      </div>

      <ChokerSpacer />

      <Genres />
    </div>
  );
}
