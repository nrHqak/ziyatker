import Image from "next/image";
import Link from "next/link";
import GlyphPortal from "@/components/ui/glyph-portal";
import { Timeline } from "@/components/ui/timeline";
import { AskForm, FAQ, GradeImpact, InitiativesAccordion } from "@/components/sections/home-interactions";
import { journalPosts, team } from "@/content/campaign";

const teamPreviewOrder = ["malika", "alaziza", "alfarabi"];
const teamPreview = teamPreviewOrder.map((id) => team.find((member) => member.id === id)!);
const campaignMedia = journalPosts.map((post, index) => ({
  src: post.image,
  alt: post.imageAlt,
  className: `poster poster-${index + 1}`,
}));

export default function HomePage() {
  return (
    <main id="main-content">
      <GlyphPortal
        word="ZIYATKER"
        focusChar="A"
        interactive
        scrollLength={2.35}
        enterLabel="SCROLL TO ENTER"
        className="ziyatker-portal"
        style={{ "--gp-paper": "#063e2d", "--gp-ink": "#dfff21", "--gp-field": "#dfff21", "--gp-foreground": "#fafaf7" }}
        background={<div className="portal-field" />}
        front={
          <div className="portal-front">
            <p lang="kk">екеніңді ұмытпа!</p>
          </div>
        }
      >
        <section className="team-hero" aria-labelledby="team-hero-title">
          <Image src="/images/team/team-school.png" alt="Alfarabi, Alaziza, and Malika standing in front of NIS Atyrau" fill priority sizes="100vw" />
          <div className="team-hero-shade" />
          <span className="section-kicker">01 / THE TEAM</span>
          <h1 id="team-hero-title">THIS IS<br />ZIYATKER.</h1>
          <div className="team-role-line" aria-label="Team roles from left to right">
            <span>ALFARABI — SECRETARY</span><span>ALAZIZA — PRESIDENT</span><span>MALIKA — PRIME MINISTER</span>
          </div>
        </section>
      </GlyphPortal>

      <section className="manifesto paper-section" aria-labelledby="manifesto-title">
        <span className="section-kicker">02 / MANIFESTO</span>
        <h2 id="manifesto-title">WE DON&apos;T NEED<br />MORE PROMISES.<br /><em>WE NEED</em><br />OPPORTUNITIES.</h2>
        <div className="manifesto-copy">
          <p>ZIYATKER connects education, opportunity, community, and experience—grounding a proposed program in work the team has already done.</p>
          <blockquote lang="kk">Жарқын болашақты мұра ету — зияткерлікті талап етеді.</blockquote>
        </div>
        <div className="keyword-row"><span>EDUCATION</span><span>OPPORTUNITY</span><span>COMMUNITY</span><span>EXPERIENCE</span></div>
      </section>

      <section className="impact-section" aria-labelledby="impact-title">
        <div className="section-heading">
          <span className="section-kicker">03 / WHAT CHANGES FOR YOU</span>
          <h2 id="impact-title" lang="kk">СЕН ҮШІН<br />НЕ ӨЗГЕРЕДІ?</h2>
        </div>
        <GradeImpact />
      </section>

      <section className="initiatives-section paper-section" aria-labelledby="initiatives-title">
        <div className="section-heading wide-heading">
          <span className="section-kicker">04 / PROPOSED PROGRAM · 2026–2027</span>
          <h2 id="initiatives-title" lang="kk"><span lang="en">ZIYATKER —</span><br />ӨЗГЕРІСКЕ АЛҒАШҚЫ ҚАДАМ!</h2>
        </div>
        <InitiativesAccordion />
        <Link className="editorial-link" href="/program">EXPLORE THE FULL PROGRAM</Link>
      </section>

      <section className="motion-section" aria-labelledby="motion-title">
        <div className="motion-title-wrap">
          <span className="section-kicker">05 / CAMPAIGN ARCHIVE</span>
          <h2 id="motion-title">ALREADY<br />IN MOTION →</h2>
        </div>
        <div className="poster-stage">
          {campaignMedia.map((item) => (
            <figure className={item.className} key={item.src}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 70vw, 26vw" />
            </figure>
          ))}
          <span className="tape tape-one" aria-hidden="true" /><span className="tape tape-two" aria-hidden="true" />
          <p className="scribble">REAL POSTS.<br />REAL MOMENTUM.</p>
        </div>
      </section>

      <section className="team-preview paper-section" aria-labelledby="team-preview-title">
        <div className="section-heading">
          <span className="section-kicker">06 / MEET THE TEAM</span>
          <h2 id="team-preview-title">MEET<br />ZIYATKER</h2>
        </div>
        <div className="team-editorial-grid">
          {teamPreview.map((member) => (
            <Link key={member.id} href={`/team#${member.id}`} className={`team-preview-card ${member.id === "alaziza" ? "is-president" : ""}`}>
              <div className="portrait-frame"><Image src={member.portrait} alt={`${member.name}, ${member.role}`} fill sizes="(max-width: 760px) 88vw, 33vw" style={{ objectPosition: member.imagePosition }} /></div>
              <div><span>{member.number} / {member.role.toUpperCase()}</span><h3>{member.firstName}<br />{member.lastName}</h3><b>VIEW PROFILE ↗</b></div>
            </Link>
          ))}
        </div>
      </section>

      <Timeline items={journalPosts} />

      <section id="faq" className="ask-section paper-section" aria-labelledby="ask-title">
        <div className="ask-heading">
          <span className="section-kicker">09 / FAQ</span>
          <h2 id="ask-title">ASK<br />ZIYATKER</h2>
          <p>Something unclear?<br />Ask us directly.</p>
        </div>
        <div className="ask-content"><FAQ /><AskForm /></div>
      </section>

      <section className="final-manifesto" aria-label="ZIYATKER final manifesto">
        <span>NIS ATYRAU<br />2026</span>
        <h2>ZIYATKER</h2>
        <p lang="kk">екеніңді ұмытпа!</p>
      </section>
    </main>
  );
}
