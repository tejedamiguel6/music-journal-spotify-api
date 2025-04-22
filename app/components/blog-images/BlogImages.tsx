"use client";
import Image from "next/image";
import styles from "./blog-images.module.css";

export default function BlogImages({ imageData }) {
  console.log("image data", imageData);
  return (
    <div className={styles.container}>
      <div key={imageData.sys.id} className={styles.card}>
        <Image
          src={imageData.media.url}
          width={500}
          height={500}
          alt="Avatar"
          style={{ width: "100%" }}
          className={styles.image}
        />
        <div className="container">
          <h4>
            <b>{imageData.post?.title}</b>
          </h4>

          <h3>{imageData.post?.shortText}</h3>
          <p>{imageData.post?.publishedDate}</p>
        </div>
      </div>
    </div>
  );
}
