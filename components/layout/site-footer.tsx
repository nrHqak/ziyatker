import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>ZIYATKER</strong>
        <p>NIS ATYRAU · 2026</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/program">PROGRAM</Link>
        <Link href="/team">TEAM</Link>
        <Link href="/journal">JOURNAL</Link>
        <Link href="/#faq">FAQ</Link>
      </nav>
      <span>@ziyatker.sc</span>
    </footer>
  );
}
