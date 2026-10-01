import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journalPosts } from "@/content/campaign";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = journalPosts.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const post = journalPosts[index];
  const previous = journalPosts[(index - 1 + journalPosts.length) % journalPosts.length];
  const next = journalPosts[(index + 1) % journalPosts.length];

  return (
    <main id="main-content" className="inner-page article-page">
      <header className="article-header">
        <span>JOURNAL / {post.category.toUpperCase()} / {post.date}</span>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </header>
      <figure className="article-hero"><Image src={post.image} alt={post.imageAlt} fill priority sizes="100vw" /></figure>
      <article className="article-body">
        <p>For confirmed campaign updates, follow the official ZIYATKER account on Instagram.</p>
        <p><Link href="https://www.instagram.com/ziyatker.sc/" target="_blank" rel="noreferrer">FOLLOW @ZIYATKER.SC ↗</Link></p>
      </article>
      <nav className="article-nav" aria-label="Journal entries">
        <Link href={`/journal/${previous.slug}`}><span>PREVIOUS</span>{previous.title}</Link>
        <Link href={`/journal/${next.slug}`}><span>NEXT</span>{next.title}</Link>
      </nav>
    </main>
  );
}
