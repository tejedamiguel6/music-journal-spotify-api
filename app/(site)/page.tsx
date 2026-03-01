import styles from "./page.module.css";
import NowPlaying from "../components/spotify-now-playing/now-playing";
import UserTopArtists from "../components/spotify-user-data/user-top-artists";
import ChockerSpacer from "../components/page-spacers/chocker";
import Genres from "../components/genres/genres";

export default async function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Music Journal</h1>
        <NowPlaying />
      </div>

      <div className={styles.content}>
        <UserTopArtists limit={12} className={styles.artistsGrid} />
      </div>

      <ChockerSpacer />

      <Genres />
    </div>
  );
}
