"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { initiativeGroupOrder, initiatives } from "@/content/campaign";

export default function ProgramPage() {
  const { t } = useLanguage();
  return (
    <main id="main-content" className="inner-page program-page">
      <header className="inner-hero program-hero" data-nav-theme="light"><span>{t.program.pageKicker}</span><h1>{t.program.pageTitle.split("\n").map((line, index) => index === 2 ? <em key={line}>{line}</em> : <span key={line}>{line}</span>)}</h1><p>{t.program.intro}</p></header>
      <div className="program-list">
        {initiativeGroupOrder.map((groupId) => {
          const grouped = initiatives.filter((initiative) => initiative.group === groupId);
          return <section className="program-group" data-nav-theme="light" aria-labelledby={`group-${groupId}`} key={groupId}>
            <header className="program-group-heading"><span>{String(initiativeGroupOrder.indexOf(groupId) + 1).padStart(2, "0")}</span><h2 id={`group-${groupId}`}>{t.program.groups[groupId]}</h2></header>
            {grouped.map((initiative) => {
              const copy = t.initiatives[initiative.id];
              return <article id={initiative.id} className="program-item" key={initiative.id}>
                <div className="program-number">{initiative.number}</div>
                <div className="program-copy"><span>{t.program.itemLabel}</span><h3 lang={initiative.id === "care" ? "kk" : undefined}>{copy.title}</h3><p className="program-summary">{copy.summary}</p>
                  <dl><div><dt>{t.fields.why}</dt><dd>{copy.why}</dd></div><div><dt>{t.fields.benefit}</dt><dd>{copy.benefit}</dd></div><div><dt>{t.fields.mechanism}</dt><dd>{copy.mechanism}</dd></div><div><dt>{t.fields.audience}</dt><dd>{copy.audience}</dd></div></dl>
                </div>
                <div className="program-index" aria-hidden="true">{initiative.number} / 14</div>
              </article>;
            })}
          </section>;
        })}
      </div>
    </main>
  );
}
