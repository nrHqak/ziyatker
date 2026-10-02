"use client";

import { useLanguage } from "@/components/i18n/language-provider";
import { initiatives } from "@/content/campaign";

export default function ProgramPage() {
  const { t } = useLanguage();
  return (
    <main id="main-content" className="inner-page program-page">
      <header className="inner-hero program-hero"><span>{t.program.pageKicker}</span><h1>{t.program.pageTitle.split("\n").map((line, index) => index === 2 ? <em key={line}>{line}</em> : <span key={line}>{line}</span>)}</h1><p>{t.program.intro}</p></header>
      <div className="program-list">
        {initiatives.map((initiative, index) => {
          const copy = t.initiatives[initiative.id];
          return <section id={initiative.id} className="program-item" key={initiative.id}>
            <div className="program-number">{initiative.number}</div>
            <div className="program-copy"><span>{t.program.itemLabel}</span><h2 lang={initiative.id === "care" ? "kk" : undefined}>{copy.title}</h2><p className="program-summary">{copy.summary}</p>
              <dl><div><dt>{t.fields.why}</dt><dd>{copy.why}</dd></div><div><dt>{t.fields.benefit}</dt><dd>{copy.benefit}</dd></div><div><dt>{t.fields.mechanism}</dt><dd>{copy.mechanism}</dd></div><div><dt>{t.fields.audience}</dt><dd>{copy.audience}</dd></div><div className="program-status"><dt>{t.fields.status}</dt><dd>{copy.status}</dd></div></dl>
            </div>
            <div className="program-index" aria-hidden="true">{String(index + 1).padStart(2, "0")} / 05</div>
          </section>;
        })}
      </div>
    </main>
  );
}
