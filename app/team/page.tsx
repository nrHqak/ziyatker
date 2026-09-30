import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/content/campaign";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the ZIYATKER team and review their documented project experience.",
};

export default function TeamPage() {
  return (
    <main id="main-content" className="inner-page team-page">
      <header className="inner-hero">
        <span>THE TEAM / NIS ATYRAU</span>
        <h1>EXPERIENCE<br /><em>BEFORE</em><br />PROMISES.</h1>
        <p>Three candidates. Documented work in education, clubs, debate, performance, and career guidance.</p>
      </header>

      {team.map((member, index) => (
        <section id={member.id} className={`profile-feature ${index % 2 ? "reverse" : ""}`} key={member.id}>
          <div className="profile-image"><Image src={member.portrait} alt={`${member.name}, ${member.role}`} fill priority={index === 0} sizes="(max-width: 800px) 100vw, 48vw" style={{ objectPosition: member.imagePosition }} /></div>
          <div className="profile-story">
            <span>{member.number} / {member.role.toUpperCase()}</span>
            <h2>{member.firstName}<br />{member.lastName}</h2>
            <div className="evidence-list">
              {member.achievements.map((achievement) => (
                <article key={achievement.project}>
                  <h3>{achievement.project}</h3>
                  <dl>
                    <div><dt>ROLE</dt><dd>{achievement.role}</dd></div>
                    <div><dt>WHAT THEY DID</dt><dd>{achievement.action}</dd></div>
                    <div><dt>IMPACT</dt><dd>{achievement.impact}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="proof-section" aria-labelledby="proof-title">
        <span>DONE / PROOF</span>
        <h2 id="proof-title">WORK YOU<br />CAN COUNT.</h2>
        <div className="proof-grid">
          <div><strong>400+</strong><p>Career Fest participants</p></div>
          <div><strong>15</strong><p>Chess Club team members</p></div>
          <div><strong>~20</strong><p>Chess tournament participants</p></div>
          <div><strong>10</strong><p>Wave team members</p></div>
        </div>
      </section>
    </main>
  );
}
