"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function HashScrollRestorer() {
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    let timeout = 0;

    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      frame = window.requestAnimationFrame(() => {
        frame = window.requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
      });
      timeout = window.setTimeout(() => target.scrollIntoView({ block: "start" }), 450);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
