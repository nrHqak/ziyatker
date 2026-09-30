import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { journalPosts } from "@/content/campaign";

export const metadata: Metadata = {
  title: "Campaign Journal",
  description: "Campaign activities and supplied media from ZIYATKER at NIS Atyrau.",
};

export default function JournalPage() {
  return (
    <main id="main-content" className="inner-page journal-page">
      <header className="inner-hero journal-hero">
        <span>CAMPAIGN ARCHIVE</span>
        <h1>CAMPAIGN<br /><em>JOURNAL.</em></h1>
        <p>Activities, posters, and moments from the ZIYATKER campaign. Dates are omitted where the supplied material does not confirm them.</p>
      </header>
      <div className="journal-archive">
        {journalPosts.map((post, index) => (
          <article className={`archive-entry entry-${index + 1}`} key={post.slug}>
            <Link href={`/journal/${post.slug}`}>
              <div className="archive-image"><Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 760px) 90vw, 55vw" /></div>
              <div className="archive-copy"><span>0{index + 1} / {post.category}</span><h2>{post.title}</h2><p>{post.excerpt}</p><b>READ ENTRY →</b></div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
