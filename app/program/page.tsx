import type { Metadata } from "next";
import { initiatives } from "@/content/campaign";

export const metadata: Metadata = {
  title: "Program",
  description: "Explore ZIYATKER’s five proposed initiative areas for the 2026–2027 year.",
};

export default function ProgramPage() {
  return (
    <main id="main-content" className="inner-page program-page">
      <header className="inner-hero program-hero">
        <span>PROPOSED PROGRAM / 2026–2027</span>
        <h1>FIVE WAYS<br />TO MOVE<br /><em>FORWARD.</em></h1>
        <p>These initiatives are proposed directions—not completed guarantees. Partnership examples remain intentions unless formally confirmed.</p>
      </header>
      <div className="program-list">
        {initiatives.map((initiative, index) => (
          <section id={initiative.id} className="program-item" key={initiative.id}>
            <div className="program-number">{initiative.number}</div>
            <div className="program-copy">
              <span>PROPOSED / NEXT</span>
              <h2>{initiative.title}</h2>
              <dl>
                <div><dt>THE ISSUE</dt><dd>{initiative.problem}</dd></div>
                <div><dt>PROPOSED CHANGE</dt><dd>{initiative.change}</dd></div>
                <div><dt>HOW IT COULD WORK</dt><dd>{initiative.mechanism}</dd></div>
                <div><dt>INTENDED FOR</dt><dd>{initiative.audience}</dd></div>
              </dl>
            </div>
            <div className="program-index" aria-hidden="true">0{index + 1} / 05</div>
          </section>
        ))}
      </div>
    </main>
  );
}
