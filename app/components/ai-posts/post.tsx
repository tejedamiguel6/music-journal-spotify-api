"use client";
import { RichTextHtml } from "@/app/lib/utils/rich-text-to-html";
import styles from "./post.module.css";

import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Post({ post }: { post: any[] }) {
  const [showAll, setShowAll] = useState(false);

  // console.log(post.length, "length of character");

  const visibleContent = showAll ? post : post.slice(0, 3);

  return (
    <div className={styles.richText}>
      {RichTextHtml(visibleContent)}

      {post.length >= 3 && !showAll ? (
        <button onClick={() => setShowAll(true)}>Read More</button>
      ) : (
        <button onClick={() => setShowAll(false)}>Hide</button>
      )}
    </div>
  );
}
