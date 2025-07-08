import { fetchGraphQL } from "./lib/contentful-api";
import Image from "next/image";
import Link from "next/link";
import AiCardImages from "./components/ai-images/AiCardImages";
import Navigation from "./components/navigation/navigation";
import { cookies } from "next/headers";

import Profile from "./components/spotify-profile/profile";
import UserTopArtists from "./components/spotify-user-data/user-top-artists";
import styles from "./page.module.css";

export default async function Page() {
  const query = `
   query DREAM_AI_MAP {
  pageCollection(where: {slug: "dream-map"}, limit: 1) {
    items {
      title
      slug
      sectionsCollection (limit:7){
        items  {
          __typename
          ... on ItemAiArtPost {
            title
            slug
            aiMediaCollection(limit: 10) {
              items {
                media {
                  title
                  description
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
}

`;
  const { data } = await fetchGraphQL(query);

  const { pageCollection } = data;

  // console.log(pageCollection, "DATA");

  return (
    <>
      <AiCardImages aiImageData={pageCollection} />

      <div className={styles.header}>
        <div className={styles.intro}>
          <h1 className={styles.title}>MIGUEL TEJEDA</h1>
          <p className={styles.description}>
            this is space for me where i can give it a shot at technical
            writing, art, bloggin, and learning new tech
          </p>
        </div>

        <p className={styles.socialSection}>SOCIAL MEDIA ICONS HERE</p>
      </div>

      {/* start spotify  */}
      <div className={styles.spotifyGrid}>
        <div className={styles.profileSection}>
          <Link href="/music-journal">
            <h1>Music Journal</h1>
          </Link>
        </div>

        <div className={styles.artistsSection}>
          <UserTopArtists limit={2} className={styles.artistsGrid} />
        </div>

        <div>
          <h1>Technical writing section here</h1>
        </div>
      </div>
    </>
  );
}
