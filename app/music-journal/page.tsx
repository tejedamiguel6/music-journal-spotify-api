import Link from "next/link";
import Image from "next/image";
import getSavedTracks from "../lib/spotify-requests/get-saved-tracks";
import getCurrentlyPlaying from "../lib/spotify-requests/get-now-playing";
import Profile from "../components/spotify-profile/profile";
import { cookies } from "next/headers";
import RecentlyLked from "../components/spotify-recently-liked/recently-liked";
import { getUserTopItem } from "../lib/spotify-requests/get-top-artist";
import UserTopItems from "../components/spotify-user-data/user-top-artists";
import TopTracks from "../components/spotify-user-data/user-top-tracks";
import getUserPlaylist from "../lib/spotify-requests/get-playlist";
import UserTopArtists from "../components/spotify-user-data/user-top-artists";
import { fetchGraphQL } from "../lib/contentful-api";

export default async function Page() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("spotify_access_token")?.value;
  const savedTracksData = await getSavedTracks(6);
  const userTopItemsData = await getUserTopItem("tracks", 20);
  const userPlaylistData = await getUserPlaylist();

  // get now playing data
  const currentlPlayingData = await getCurrentlyPlaying();

  return (
    <>
      <div className="relative pt-12 border">
        <div className="flex justify-center items-center">
          <h3>Recently Added</h3>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          Currently spinning....
          <h1>{currentlPlayingData.item?.album.artists[0].name}</h1>
          <Image
            src={currentlPlayingData.item?.album.images[0].url}
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="flex gap-8 pt-10">
        <div>
          <Profile />
        </div>

        <div>
          {/* <RecentlyLked savedTracksData={savedTracksData} /> */}
          <UserTopArtists
            limit={8}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
          />
        </div>
      </div>

      <div>{/* <TopTracks userTopItemsData={userTopItemsData} /> */}</div>
    </>
  );
}
