import getTopTracks from "../components/spotify-user-data/gettopTracks";
import styles from "./page.module.css";
import NowPlaying from "../components/spotify-now-playing/now-playing";
import TopTracks from "../components/spotify-user-data/user-top-tracks";
import UserTopArtists from "../components/spotify-user-data/user-top-artists";
// AI agent stuff
import { Agent } from "../components/ai-agent/agent";

import ChockerSpacer from "../components/page-spacers/chocker";
import Genres from "../components/genres/genres";

export default async function Page() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Music JOURNAL</h1>
          <h1 className={styles.subTitle}>Music Journal</h1>
          <NowPlaying />
        </div>

        <div className={styles.content}>
          <div>
            <UserTopArtists limit={12} className={styles.artistsGrid} />
          </div>
        </div>
        <div>
          <ChockerSpacer />
        </div>
        <div>{/* <TopTracks userTopItemsData={topTracksContentful} /> */}</div>

        <div>
          <Genres />
        </div>

        <div>
          <h1>Artist On my radar!</h1>
        </div>
      </div>
    </>
  );
}
