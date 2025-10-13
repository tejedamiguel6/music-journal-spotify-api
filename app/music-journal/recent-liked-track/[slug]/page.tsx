import getTrackData from "../../../lib/spotify-requests/get-track-data";

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
    <div>
      <h1>Recent liked!!</h1>
      <pre>{JSON.stringify(trackData, null, 2)}</pre>

      {/* Optionally, display album info */}
      <h3>Album: {trackData.album?.name}</h3>

      <h3>Artists:</h3>
      {trackData.artists?.length >= 1 &&
        trackData?.artists?.map((artist) => {
          return <div key={artist.id}>{artist.name}</div>;
        })}
    </div>
  );
}
