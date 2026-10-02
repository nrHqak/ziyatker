"use client";

import Image from "next/image";
import { useLanguage } from "@/components/i18n/language-provider";
import { team } from "@/content/campaign";

export default function TeamPage() {
  const { t } = useLanguage();
  const proofNumbers = ["400+", "15", "~20", "10"];
  return (
    <main id="main-content" className="inner-page team-page">
      <header className="inner-hero" data-nav-theme="dark"><span>{t.team.pageKicker}</span><h1>{t.team.pageTitle.split("\n").map((line, index) => index === 1 ? <em key={line}>{line}</em> : <span key={line}>{line}</span>)}</h1><p>{t.team.intro}</p></header>

      {team.map((member, index) => {
        const memberCopy = t.team.members[member.id];
        return (
          <div className="profile-block" data-nav-theme="light" key={member.id}>
          <section id={member.id} className={`profile-feature ${index % 2 ? "reverse" : ""}`}>
            <div className="profile-image"><Image src={member.portrait} alt={`${member.name}, ${memberCopy.role}`} fill priority={index === 0} sizes="(max-width: 800px) 100vw, 48vw" style={{ objectPosition: member.imagePosition, scale: member.imageScale }} /></div>
            <div className="profile-story">
              <span>{member.number} / {memberCopy.role.toUpperCase()}</span><h2>{member.firstName}<br />{member.lastName}</h2>
              <div className="evidence-list">
                {member.achievements.map((achievement) => {
                  const copy = memberCopy.achievements[achievement.id];
                  return <article key={achievement.id}><h3>{copy.project}</h3><dl><div><dt>{t.fields.role}</dt><dd>{copy.role}</dd></div><div><dt>{t.fields.action}</dt><dd>{copy.action}</dd></div><div><dt>{t.fields.impact}</dt><dd>{copy.impact}</dd></div></dl></article>;
                })}
              </div>
            </div>
          </section>
          {member.metrics && <section className="leadership-numbers" aria-labelledby="leadership-numbers-title">
            <div className="leadership-heading"><span>{t.team.leadershipKicker}</span><h2 id="leadership-numbers-title">{t.team.leadershipTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2></div>
            <div className="leadership-metrics">{member.metrics.map((metric) => <div key={metric.id}><strong>{metric.value}</strong><p>{memberCopy.metrics?.[metric.id].label}</p></div>)}</div>
          </section>}
          </div>
        );
      })}

      <section className="proof-section" data-nav-theme="light" aria-labelledby="proof-title">
        <span>{t.team.proofKicker}</span><h2 id="proof-title">{t.team.proofTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
        <div className="proof-grid">{proofNumbers.map((number, index) => <div key={number}><strong>{number}</strong><p>{t.team.proofLabels[index]}</p></div>)}</div>
      </section>
    </main>
  );
}
