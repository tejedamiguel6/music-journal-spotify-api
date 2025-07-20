import { fetchGraphQL } from "@/app/lib/contentful-api";
import Image from "next/image";
import styles from "./chocker.module.css";

export default async function ChockerSpacer() {
  const chokcerSpacerQuery = `
  query IMAGE_BLOCK($title: String) {
  blockMediaCollection(where: {title: $title}) {
    items {
      media {
        url
        title
         width
        height
      }
    }
  }
}
`;
  const title = "choker chain spacer";

  const { data } = await fetchGraphQL(chokcerSpacerQuery, { title });
  const spacerImage = data.blockMediaCollection.items.map((item) => item.media);

  return (
    <div className={styles.imageContainer}>
      <Image
        className={styles.spacerImage}
        src={spacerImage[0].url}
        width={400} // optional; Tailwind `w-[300px]` will take precedence
        height={spacerImage[0].height} // optional
        alt="currently playing"
      />
    </div>
  );
}
