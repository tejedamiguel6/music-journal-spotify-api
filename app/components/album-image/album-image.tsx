import Image from "next/image";

export default function AlbumImage({ artistData }) {
  console.log("Name of album", artistData);
  const albumCover = artistData.images[0].url;

  return (
    <div className="flex justify-center border">
      <div className="absolute self-center justify-self-center">
        <h1 className="font-extrabold text-7xl">{artistData.name}</h1>
      </div>
      {albumCover ? (
        <Image
          className="max-w-full h-auto"
          src={albumCover}
          width={artistData.images[0].width}
          height={artistData.images[0].height}
          alt={`album cover for ${artistData.name}`}
        />
      ) : null}
    </div>
  );
}
