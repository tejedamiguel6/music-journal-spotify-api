import Image from "next/image";
import Link from "next/link";
import { fetchGraphQL } from "@/app/lib/contentful-api";

export default async function Profile() {
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
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return <div>Error loading profile: {errorMessage}</div>;
  }
}
