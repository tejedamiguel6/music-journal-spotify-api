import Link from "next/link";
import Image from "next/image";
import getSavedTracks from "../lib/spotify-requests/get-saved-tracks";
import getCurrentlyPlaying from "../lib/spotify-requests/get-now-playing";
import Profile from "../components/spotify-profile/profile";
import { cookies } from "next/headers";
import RecentlyLked from "../components/spotify-recently-liked/recently-liked";
import UserTopItems from "../components/spotify-user-data/user-top-artists";
import TopTracks from "../components/spotify-user-data/user-top-tracks";
import getUserPlaylist from "../lib/spotify-requests/get-playlist";
import UserTopArtists from "../components/spotify-user-data/user-top-artists";
import { fetchGraphQL } from "../lib/contentful-api";

import getTopTracks from "../components/spotify-user-data/gettopTracks";

// GO api
import getTracksFromDB from "../lib/db-request/get-tracks";

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

  const topTracksContentful = await getTopTracks();

  return (
    <>
      <div className="relative pt-12 ">
        <div className="flex justify-center items-center">
          <h3>TOP ARTISTS</h3>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex justify-center align-middle">
          <div className="flex justify-center items-center m-4">
            <p> Currently spinning...</p>
            <h1>{currentlPlayingData.item?.album.artists[0].name}</h1>
          </div>
          <Image
            className="rounded-full animate-spin-vinyl"
            src={currentlPlayingData.item?.album.images[0].url}
            width={50}
            height={50}
            alt={`currently playing`}
          />
        </div>
      </div>
      <div className="flex gap-8 pt-10">
        <div>
          {/* <RecentlyLked savedTracksData={savedTracksData} /> */}
          <UserTopArtists
            limit={8}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 "
          />
        </div>
      </div>

      <div className="flex items-center justify-center pt-28">
        <Image
          className="w-[500px] h-auto" // adjust width as needed
          src={spacerImage[0].url}
          width={400} // optional; Tailwind `w-[300px]` will take precedence
          height={spacerImage[0].height} // optional
          alt="currently playing"
        />
      </div>

      <div>
        <TopTracks userTopItemsData={topTracksContentful} />
      </div>
    </>
  );
}
