"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import type { JournalPost } from "@/content/campaign";

export function Timeline({ items }: { items: JournalPost[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  function scroll(direction: number) {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollBy({ left: direction * viewport.clientWidth * 0.82, behavior: "smooth" });
  }

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    const viewport = viewportRef.current;
    if (!viewport || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    const movingForward = event.deltaY > 0;
    const atStart = viewport.scrollLeft <= 0;
    const atEnd = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 1;
    if ((movingForward && !atEnd) || (!movingForward && !atStart)) {
      event.preventDefault();
      viewport.scrollLeft += event.deltaY;
    }
  }

  return (
    <section id="journal-preview" className="journal-timeline" data-nav-theme="dark" aria-labelledby="journal-heading">
      <div className="timeline-layout">
        <div className="timeline-heading">
          <span>{t.journal.sectionKicker}</span>
          <h2 id="journal-heading">{t.journal.sectionTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
          <Link href="/journal">{t.journal.viewAll}</Link>
          <div className="timeline-controls">
            <button type="button" onClick={() => scroll(-1)} aria-label={t.journal.scrollBack}><ArrowLeft aria-hidden="true" /></button>
            <button type="button" onClick={() => scroll(1)} aria-label={t.journal.scrollForward}><ArrowRight aria-hidden="true" /></button>
          </div>
        </div>
        <div ref={viewportRef} className="timeline-viewport" onWheel={handleWheel}>
          <div className="timeline-track">
            {items.map((item, index) => {
              const copy = t.journal.posts[item.slug];
              const meta = [item.date, item.time, item.location].filter(Boolean).join(" · ");
              return (
                <article key={item.slug} className="timeline-card">
                  <Link href={`/journal/${item.slug}`} aria-label={`${t.common.readEntry}: ${copy.title}`}>
                    <div className="timeline-image"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 759px) 82vw, 32vw" /></div>
                    <div className="timeline-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{copy.category}</span></div>
                    <h3>{copy.title}</h3>
                    {meta ? <small>{meta}</small> : null}
                    <p>{copy.description}</p>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
