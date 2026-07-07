import { getTrackData } from "@/app/lib/spotify";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    id: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { id } = await searchParams;

  const trackData = await getTrackData(id);


  return (
    <div className="container mx-auto">
      <h1>{trackData.name}</h1>

      <h3>Album: {trackData.album?.name}</h3>

      <h3>Artists:</h3>
      {trackData.artists?.length >= 1 &&
        trackData.artists.map((artist: { id: string; name: string }) => {
          return <div key={artist.id}>{artist.name}</div>;
        })}
    </div>
  );
}
