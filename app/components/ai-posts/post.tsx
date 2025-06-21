"use client";
import { RichTextHtml } from "@/app/lib/utils/rich-text-to-html";
import RenderElements from "../render-elements/richt-text";
import styles from "./post.module.css";

import { useState, useEffect } from "react";

export default function Post({ post }) {
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
