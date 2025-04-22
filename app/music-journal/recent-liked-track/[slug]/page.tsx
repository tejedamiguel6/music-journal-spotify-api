import getTrackData from "../../../lib/spotify-requests/get-track-data";

type PageProps = {
  params: {
    slug: string;
  };
  searchParams: {
    id: string;
  };
};

export default async function Page({ params, searchParams }: PageProps) {
  console.log(params);

  const { slug } = params;
  const { id } = searchParams;
  console.log(slug, "you got the slug");
  console.log(id, "youID)");

  const trackData = await getTrackData(id);

  console.log("MIGUEL", trackData);

  return (
    <div>
      <h1>Recent liked!!</h1>
      <pre>{JSON.stringify(trackData, null, 2)}</pre>

      {/* Optionally, display album info */}
      <h3>Album: {trackData.album?.name}</h3>

      <h3>Artists:</h3>
      {trackData.artists?.length >= 1 &&
        trackData?.artists?.map((artist) => {
          console.log("Artist:", artist);
          return <div key={artist.id}>{artist.name}</div>;
        })}
    </div>
  );
}
