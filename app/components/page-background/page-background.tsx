"use client";
import { useEffect } from "react";

/**
 * Paints the whole page (body, navigation, floating widgets) with a
 * page-specific background color by setting the --page-background CSS
 * variable. Cleans up on navigation so other pages fall back to the
 * default theme background.
 */
export default function PageBackground({ color }: { color?: string | null }) {
  useEffect(() => {
    if (!color) return;
    const root = document.documentElement;
    root.style.setProperty("--page-background", color);
    return () => {
      root.style.removeProperty("--page-background");
    };
  }, [color]);

  return null;
}
