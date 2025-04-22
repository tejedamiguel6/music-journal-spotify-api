import Image from "next/image";
import Link from "next/link";
import formatDayAndTime from "@/app/lib/utils/format-day-time";

export default function RecentlyLked({ savedTracksData }) {
  // console.log("@@@", savedTracksData);

  function createSlug(str: string): string {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove special chars
      .replace(/\s+/g, "-"); // replace spaces with hyphens
  }

  return (
    <div className="grid grid-cols-3 gap-4  ">
      {savedTracksData?.items?.map((item) => {
        const { track, added_at } = item;
        const artistsFromArray = track.artists.map((artist) => artist.name);
        const firstArtistName = artistsFromArray[0];
        const getArtistId = track.artists.map((artist) => artist.id);
        const artistSlugId = getArtistId[0];

        return (
          <div key={track.id}>
            <Link
              href={`/music-journal/recent-liked-track/${createSlug(
                firstArtistName
              )}?id=${track.id}`}
            >
              <Image
                className="w-[250px] h-[250px]"
                src={track.album.images[0].url}
                alt="album"
                width={track.album.images[0].width}
                height={track.album.images[0].height}
              />
            </Link>
            <h1 className="text-center pt-2">{track.name}</h1>
            <p className="p-2 text-center">{track.artists[0].name}</p>
            <p>❤️ on {formatDayAndTime(added_at)}</p>
          </div>
        );
      })}
    </div>
  );
}
