import Image from "next/image";
import styles from "./profile.module.css";
import Link from "next/link";
import { getSpotifyData } from "@/app/lib/spotify-requests/spotify";
import { fetchGraphQL } from "@/app/lib/contentful-api";

export default async function Profile({}) {
  const query = `
  query GET_SPOTIFY_PROFILE {
  blockProfileDataCollection {
    items {
      internalName
      profileData
    }
  }
}
  `;

  const data = await fetchGraphQL(query);

  console.log("this is the profile", data.data.blockProfileDataCollection);

  try {
    return (
      <div>
        <Link href={`/music-journal`}>
          <Image
            className="rounded-full"
            src={
              data.data.blockProfileDataCollection.items[0].profileData
                .images[0].url
            }
            width={
              data.data.blockProfileDataCollection.items[0].profileData
                .images[0].width
            }
            height={
              data.data.blockProfileDataCollection.items[0].profileData
                .images[0].height
            }
            alt={"profile image"}
          />
        </Link>
      </div>
    );
  } catch (error) {
    console.error("Error fetching profile:", error);
    return <div>Error loading profile: {error.message}</div>;
  }
}
