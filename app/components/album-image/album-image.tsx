import Image from "next/image";
import styles from "./album-image.module.css";

interface AlbumImageProps {
  artistData: {
    images: Array<{
      url: string;
      width: number;
      height: number;
    }>;
    name: string;
  };
  text: string;
}

export default function AlbumImage({ artistData, text }: AlbumImageProps) {
  const albumCover = artistData?.images[0].url;

  return (
    <div className={styles.container}>
      {/* This is OUTSIDE the image, above it */}
      <h2 className={styles.title}>
        {text}
      </h2>

      {/* This wraps the image + overlay name */}
      <div className={styles.imageContainer}>
        {albumCover ? (
          <Image
            className={styles.image}
            src={albumCover}
            width={artistData?.images[0].width}
            height={artistData?.images[0].height}
            alt={`album cover for ${artistData.name}`}
          />
        ) : null}

        {/* Name overlayed on top of image */}
        <div className={styles.overlay}>
          <h1 className={styles.artistName}>
            {artistData?.name}
          </h1>
        </div>
      </div>
    </div>
  );
}
