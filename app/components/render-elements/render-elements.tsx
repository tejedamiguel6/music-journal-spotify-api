import { RichTextHtml } from "@/app/lib/utils/rich-text-to-html";
import styles from "./render-elemets.module.css";

export default function RenderElements({ elements }) {
  console.log("these are the elements", elements);
  return (
    <div className={styles.container}>
      <div className={styles.elements}>{RichTextHtml(elements)}</div>
    </div>
  );
}
