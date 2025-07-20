"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./ai-images.module.css";

export default function AiCardImages({ aiImageData }) {
  // Check if there's valid data to work with
  if (!aiImageData?.items?.[0]?.sectionsCollection?.items) {
    return <div>No AI images available</div>;
  }

  // Get the sections collection from the first item
  const sections = aiImageData.items[0].sectionsCollection.items;

  return (
    <div className={styles.container}>
      {sections.map((section, index) => {
        // console.log("GET SLUF ", index);
        // Get the first image from each section's aiMediaCollection
        const imageItem = section.aiMediaCollection?.items?.[0];
        if (!imageItem?.media?.url) return null;
        const media = imageItem.media;
        return (
          <Link
            href={`/dream-map/${section.slug}`}
            key={index}
            className={`${styles[`imageItem${index + 1}`]}`}
          >
            <Image
              className={`${styles.imageItem} ${
                styles[`imageItem${index + 1}`]
              }`}
              width={media.width || 300}
              height={media.height || 200}
              src={media.url}
              alt={media.title || "AI Generated Image"}
            />
          </Link>
        );
      })}
    </div>
  );
}
