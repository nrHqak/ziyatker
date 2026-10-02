"use client";

import Image from "next/image";
import Link from "next/link";
import GlyphPortal from "@/components/ui/glyph-portal";
import { Timeline } from "@/components/ui/timeline";
import { AskForm, FAQ, GradeImpact, InitiativesAccordion } from "@/components/sections/home-interactions";
import { useLanguage } from "@/components/i18n/language-provider";
import { journalPosts, team } from "@/content/campaign";

const teamPreviewOrder = ["alaziza", "malika", "alfarabi"];
const teamPreview = teamPreviewOrder.map((id) => team.find((member) => member.id === id)!);
const campaignMedia = [journalPosts[0], journalPosts[8], journalPosts[1], journalPosts[3]].map((post, index) => ({
  src: post.image,
  alt: post.imageAlt,
  className: `poster poster-${index + 1}`,
}));

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <main id="main-content">
      <div id="home" className="home-anchor">
        <GlyphPortal word="ZIYATKER" focusChar="A" interactive scrollLength={2.35} enterLabel={t.home.enter} className="ziyatker-portal" style={{ "--gp-paper": "#063e2d", "--gp-ink": "#dfff21", "--gp-field": "#dfff21", "--gp-foreground": "#fafaf7" }} background={<div className="portal-field" />} front={<div className="portal-front"><p lang="kk">екеніңді ұмытпа!</p></div>}>
          <section id="team-intro" className="team-hero" data-nav-theme="dark" aria-labelledby="team-hero-title">
            <Image src="/images/team/team-school.png" alt="Alfarabi, Alaziza, and Malika standing in front of NIS Atyrau" fill priority sizes="100vw" />
            <div className="team-hero-shade" />
            <span className="section-kicker">{t.home.teamKicker}</span>
            <h1 id="team-hero-title">{t.home.teamHeroTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
            <div className="team-role-line" aria-label={t.home.rolesLabel}>
              <span>ALFARABI — {t.team.members.alfarabi.role.toUpperCase()}</span><span>ALAZIZA — {t.team.members.alaziza.role.toUpperCase()}</span><span>MALIKA — {t.team.members.malika.role.toUpperCase()}</span>
            </div>
          </section>
        </GlyphPortal>
      </div>

      <section className="manifesto paper-section" data-nav-theme="light" aria-labelledby="manifesto-title">
        <span className="section-kicker">{t.home.manifestoKicker}</span>
        <h2 id="manifesto-title">WE DON&apos;T NEED<br />MORE PROMISES.<br /><em>WE NEED</em><br />OPPORTUNITIES.</h2>
        <div className="manifesto-copy"><p>{t.home.manifestoBody}</p><blockquote>{t.home.manifestoQuote}</blockquote></div>
        <div className="keyword-row">{t.home.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
      </section>

      <section className="impact-section" data-nav-theme="dark" aria-labelledby="impact-title">
        <div className="section-heading"><span className="section-kicker">{t.home.impactKicker}</span><h2 id="impact-title">{t.home.impactTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div>
        <GradeImpact />
      </section>

      <section className="initiatives-section paper-section" data-nav-theme="light" aria-labelledby="initiatives-title">
        <div className="section-heading wide-heading"><span className="section-kicker">{t.home.programKicker}</span><h2 id="initiatives-title">{t.home.programTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div>
        <InitiativesAccordion />
        <Link className="editorial-link" href="/program">{t.home.programLink}</Link>
      </section>

      <section className="motion-section" data-nav-theme="light" aria-labelledby="motion-title">
        <div className="motion-title-wrap"><span className="section-kicker">{t.home.archiveKicker}</span><h2 id="motion-title">{t.home.archiveTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div>
        <div className="poster-stage">
          {campaignMedia.map((item) => <figure className={item.className} key={item.src}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 70vw, 25vw" /></figure>)}
          <span className="tape tape-one" aria-hidden="true" /><span className="tape tape-two" aria-hidden="true" />
        </div>
      </section>

      <section className="team-preview paper-section" data-nav-theme="light" aria-labelledby="team-preview-title">
        <div className="section-heading"><span className="section-kicker">{t.home.meetKicker}</span><h2 id="team-preview-title">{t.home.meetTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div>
        <div className="team-editorial-grid">
          {teamPreview.map((member) => {
            const role = t.team.members[member.id].role;
            return <Link key={member.id} href={`/team#${member.id}`} className={`team-preview-card ${member.id === "alaziza" ? "is-president" : ""}`}>
              <div className="portrait-frame"><Image src={member.portrait} alt={`${member.name}, ${role}`} fill sizes="(max-width: 760px) 88vw, 33vw" style={{ objectPosition: member.imagePosition, scale: member.imageScale }} /></div>
              <div><span>{member.number} / {role.toUpperCase()}</span><h3>{member.firstName}<br />{member.lastName}</h3>
                {member.metrics && <p className="team-card-proof">{member.metrics.slice(0, 3).map((metric) => <span key={metric.id}>{metric.value} {t.team.members[member.id].metrics?.[metric.id].shortLabel}</span>)}</p>}
                <b>{t.home.viewProfile}</b>
              </div>
            </Link>;
          })}
        </div>
      </section>

      <Timeline items={journalPosts} />

      <section id="faq" className="ask-section paper-section" data-nav-theme="light" aria-labelledby="ask-title">
        <div className="ask-heading"><span className="section-kicker">{t.home.faqKicker}</span><h2 id="ask-title">{t.home.faqTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2><p>{t.home.faqIntro}</p></div>
        <div className="ask-content"><FAQ /><AskForm /></div>
      </section>

      <section id="final" className="final-manifesto" data-nav-theme="dark" aria-label="ZIYATKER">
        <span>{t.footer.school.replace(" · ", "\n")}</span>
        <div className="final-lockup"><h2>ZIYATKER</h2><p lang="kk">екеніңді ұмытпа!</p></div>
      </section>
    </main>
  );
}
