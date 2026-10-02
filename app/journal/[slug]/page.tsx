import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalArticle } from "@/components/pages/journal-article";
import { journalPosts } from "@/content/campaign";
import { en } from "@/content/i18n/en";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const copy = en.journal.posts[slug];
  return copy ? { title: copy.title, description: copy.description } : {};
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!journalPosts.some((item) => item.slug === slug)) notFound();
  return <JournalArticle slug={slug} />;
}
