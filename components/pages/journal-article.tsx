"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/i18n/language-provider";
import { journalPosts } from "@/content/campaign";

export function JournalArticle({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const index = journalPosts.findIndex((item) => item.slug === slug);
  const post = journalPosts[index];
  const previous = journalPosts[(index - 1 + journalPosts.length) % journalPosts.length];
  const next = journalPosts[(index + 1) % journalPosts.length];
  const copy = t.journal.posts[post.slug];
  const meta = [copy.category, post.date, post.time, post.location].filter(Boolean).join(" / ");
  return (
    <main id="main-content" className="inner-page article-page">
      <header className="article-header"><span>JOURNAL / {meta}</span><h1>{copy.title}</h1><p>{copy.description}</p></header>
      <figure className="article-hero"><Image src={post.image} alt={post.imageAlt} fill priority sizes="100vw" /></figure>
      <article className="article-body"><p>{t.journal.confirmedUpdates}</p><p><Link href="https://www.instagram.com/ziyatker.sc/" target="_blank" rel="noreferrer">{t.common.follow}</Link></p></article>
      <nav className="article-nav" aria-label={t.journal.entriesLabel}>
        <Link href={`/journal/${previous.slug}`}><span>{t.common.previous}</span>{t.journal.posts[previous.slug].title}</Link>
        <Link href={`/journal/${next.slug}`}><span>{t.common.next}</span>{t.journal.posts[next.slug].title}</Link>
      </nav>
    </main>
  );
}
