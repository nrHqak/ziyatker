"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/i18n/language-provider";
import { journalPosts } from "@/content/campaign";

export default function JournalPage() {
  const { t } = useLanguage();
  return (
    <main id="main-content" className="inner-page journal-page">
      <header className="inner-hero journal-hero"><span>{t.journal.pageKicker}</span><h1>{t.journal.pageTitle.split("\n").map((line, index) => index === 1 ? <em key={line}>{line}</em> : <span key={line}>{line}</span>)}</h1><p>{t.journal.intro}</p></header>
      <div className="journal-archive">
        {journalPosts.map((post, index) => {
          const copy = t.journal.posts[post.slug];
          const meta = [copy.category, post.date, post.time, post.location].filter(Boolean).join(" / ");
          return <article className={`archive-entry entry-${index + 1}`} key={post.slug}><Link href={`/journal/${post.slug}`}>
            <div className="archive-image"><Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 760px) 90vw, 55vw" /></div>
            <div className="archive-copy"><span>{String(index + 1).padStart(2, "0")} / {meta}</span><h2>{copy.title}</h2><p>{copy.description}</p><b>{t.common.readEntry}</b></div>
          </Link></article>;
        })}
      </div>
    </main>
  );
}
