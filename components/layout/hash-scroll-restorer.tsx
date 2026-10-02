"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function HashScrollRestorer() {
  const pathname = usePathname();

  useEffect(() => {
    const frames: number[] = [];
    const timeouts: number[] = [];

    const scrollToHash = () => {
      frames.splice(0).forEach((frame) => window.cancelAnimationFrame(frame));
      timeouts.splice(0).forEach((timeout) => window.clearTimeout(timeout));
      const id = window.location.hash.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      const firstFrame = window.requestAnimationFrame(() => {
        const secondFrame = window.requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
        frames.push(secondFrame);
      });
      frames.push(firstFrame);
      for (const delay of [250, 800, 1600]) {
        timeouts.push(window.setTimeout(() => target.scrollIntoView({ block: "start" }), delay));
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      frames.forEach((frame) => window.cancelAnimationFrame(frame));
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
    };
  }, [pathname]);

  return null;
}
