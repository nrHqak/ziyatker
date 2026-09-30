// Adapted from the supplied Hyperiux Vault timeline reference.
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { JournalPost } from "@/content/campaign";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export function Timeline({ items }: { items: JournalPost[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced || window.innerWidth < 760) return;
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(window.innerWidth * 1.6, distance())}`,
          pin: true,
          scrub: 0.75,
          invalidateOnRefresh: true,
        },
      });
      gsap.from("[data-timeline-card]", {
        y: 70,
        opacity: 0.35,
        stagger: 0.12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top top",
          scrub: true,
        },
      });
      return () => tween.kill();
    }, section);
    return () => ctx.revert();
  }, [items]);

  return (
    <section ref={sectionRef} className="journal-timeline" aria-labelledby="journal-heading">
      <div className="timeline-heading">
        <span>08 / CAMPAIGN JOURNAL</span>
        <h2 id="journal-heading">CAMPAIGN<br />JOURNAL</h2>
        <Link href="/journal">VIEW ALL JOURNAL</Link>
      </div>
      <div ref={trackRef} className="timeline-track">
        {items.map((item, index) => (
          <article key={item.slug} className="timeline-card" data-timeline-card>
            <Link href={`/journal/${item.slug}`} aria-label={`Read ${item.title}`}>
              <div className="timeline-image">
                <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 759px) 82vw, 34vw" />
              </div>
              <div className="timeline-meta"><span>0{index + 1}</span><span>{item.category}</span></div>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
