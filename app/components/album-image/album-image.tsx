import Image from "next/image";

export default function AlbumImage({ artistData, text }) {
  const albumCover = artistData?.images[0].url;

  return (
    <div className="flex flex-col items-center ">
      {/* This is OUTSIDE the image, above it */}
      <h2 className="text-md uppercase tracking-wide text-zinc-300 mb-6">
        {text}
      </h2>

      {/* This wraps the image + overlay name */}
      <div className="relative">
        {albumCover ? (
          <Image
            className="max-w-full h-auto"
            src={albumCover}
            width={artistData?.images[0].width}
            height={artistData?.images[0].height}
            alt={`album cover for ${artistData.name}`}
          />
        ) : null}

        {/* Name overlayed on top of image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="font-extrabold text-7xl text-white drop-shadow-md">
            {artistData?.name}
          </h1>
        </div>
      </div>
    </div>
  );
}
