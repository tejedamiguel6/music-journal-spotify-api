import Image from "next/image";
import getCurrentlyPlaying from "../lib/spotify-requests/get-now-playing";
import NowPlaying from "../components/spotify-now-playing/now-playing";
import TopTracks from "../components/spotify-user-data/user-top-tracks";
import UserTopArtists from "../components/spotify-user-data/user-top-artists";
import { fetchGraphQL } from "../lib/contentful-api";

import getTopTracks from "../components/spotify-user-data/gettopTracks";

// GO api
import getTracksFromDB from "../lib/db-request/get-tracks";
import styles from "./page.module.css";

export default async function Page() {
  // get now playing data
  const currentlPlayingData = await getCurrentlyPlaying();

  // console.log("currentlyPlaying", currentlPlayingData);

  const chokcerSpacerQuery = `
  query IMAGE_BLOCK($title: String) {
  blockMediaCollection(where: {title: $title}) {
    items {
      media {
        url
        title
         width
        height
      }
    }
  }
}
`;

  const title = "choker chain spacer";
  const { data } = await fetchGraphQL(chokcerSpacerQuery, { title });

  const spacerImage = data.blockMediaCollection.items.map((item) => item.media);

  const tracksFromDB = await getTracksFromDB();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Music JOURNAL</h1>
          <h1 className={styles.subTitle}>Top Artist according to Spotify🙄</h1>

          <NowPlaying tracksFromDB={tracksFromDB} />
        </div>

        <div className={styles.content}>
          <div>
            {/* <RecentlyLked savedTracksData={savedTracksData} /> */}
            <UserTopArtists limit={8} className={styles.artistsGrid} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.spacerImage}
            src={spacerImage[0].url}
            width={400} // optional; Tailwind `w-[300px]` will take precedence
            height={spacerImage[0].height} // optional
            alt="currently playing"
          />
        </div>
        {/* <div>
        <TopTracks userTopItemsData={topTracksContentful} />
      </div> */}
        <div className={styles.bandcampContainer}>
          <h1>BandCamp Collection!</h1>
        </div>
      </div>
    </>
  );
}
