import Image from "next/image";
import Link from "next/link";
import styles from "./user-top-track.module.css";
import createSlug from "@/app/lib/utils/create-slug";

export default async function TopTracks({ userTopItemsData }) {
  return (
    <div className={styles.container}>
      <h1>Top SONGS</h1>
      <div className={styles.tracksContainer}>
        {userTopItemsData?.items?.map((track) => {
          const { album, artists } = track;
          console.log("artist Onject", track.album.name);
          // console.log("@@@===>", album.images[0].url, "");
          return (
            <div>
              {JSON.stringify(track.abum, null, 2)}
              <div className={styles.albumImage}>
                <Link
                  href={`/music-journal/top-items/track-memories/${createSlug(
                    track.name
                  )}/?id=${track.id}`}
                >
                  <Image
                    src={album.images[0].url}
                    width={album.images[0].width}
                    height={album.images[0].height}
                    alt={"something "}
                  />
                </Link>

                <h1>{track.name}</h1>
              </div>

              <pre> {JSON.stringify(track, null, 2)}</pre>
            </div>
          );
        })}
      </div>
    </div>
  );
}
