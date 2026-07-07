import { fetchGraphQL } from "@/app/lib/contentful-api";
import Image from "next/image";
import styles from "./choker-spacer.module.css";

export default async function ChokerSpacer() {
  const chokerSpacerQuery = `
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

  const { data } = await fetchGraphQL(chokerSpacerQuery, { title });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const spacerImage = data.blockMediaCollection.items.map((item: any) => item.media);

  return (
    <div className={styles.imageContainer}>
      <Image
        className={styles.spacerImage}
        src={spacerImage[0].url}
        width={400}
        height={spacerImage[0].height}
        alt="decorative page spacer"
      />
    </div>
  );
}
