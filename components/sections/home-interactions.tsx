"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import { homepageInitiativeIds, initiatives } from "@/content/campaign";

const homepageInitiatives = homepageInitiativeIds.map((id) => initiatives.find((initiative) => initiative.id === id)!);

export function GradeImpact() {
  const grades = ["7–9", "10", "11", "12"];
  const [grade, setGrade] = useState(grades[0]);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const { t } = useLanguage();

  function moveTab(currentIndex: number, direction: number) {
    const nextIndex = (currentIndex + direction + grades.length) % grades.length;
    setGrade(grades[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="impact-explorer">
      <div className="grade-prompt"><strong>{t.home.chooseGrade}</strong></div>
      <div className="grade-tabs" role="tablist" aria-label={t.home.gradeAria}>
        {grades.map((item, index) => (
          <button key={item} ref={(element) => { tabRefs.current[index] = element; }} type="button" role="tab" id={`grade-tab-${index}`} aria-controls="grade-impact-panel" aria-selected={grade === item} tabIndex={grade === item ? 0 : -1} onClick={() => setGrade(item)} onKeyDown={(event) => {
            if (event.key === "ArrowRight") { event.preventDefault(); moveTab(index, 1); }
            if (event.key === "ArrowLeft") { event.preventDefault(); moveTab(index, -1); }
            if (event.key === "Home") { event.preventDefault(); setGrade(grades[0]); tabRefs.current[0]?.focus(); }
            if (event.key === "End") { event.preventDefault(); setGrade(grades.at(-1)!); tabRefs.current[grades.length - 1]?.focus(); }
          }}>{item}</button>
        ))}
      </div>
      <div key={`${grade}-${t.localeName}`} id="grade-impact-panel" className="impact-list" role="tabpanel" aria-labelledby={`grade-tab-${grades.indexOf(grade)}`}>
        {t.gradeImpact[grade].map((item, index) => (
          <article key={item.title}><span>0{index + 1} / {item.category}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>
        ))}
      </div>
      <p className="proposal-note">{t.home.proposalNote}</p>
    </div>
  );
}

export function InitiativesAccordion() {
  const [open, setOpen] = useState(homepageInitiatives[0].id);
  const { t } = useLanguage();
  return (
    <div className="initiative-list">
      {homepageInitiatives.map((initiative, index) => {
        const active = open === initiative.id;
        const copy = t.initiatives[initiative.id];
        return (
          <article className={active ? "is-open" : ""} key={initiative.id}>
            <button type="button" onClick={() => setOpen(active ? "" : initiative.id)} aria-expanded={active} aria-controls={`initiative-${initiative.id}`}>
              <span>{String(index + 1).padStart(2, "0")}</span><h3 lang={initiative.id === "care" ? "kk" : undefined}>{copy.title}</h3><span>{active ? "−" : "+"}</span>
            </button>
            <div id={`initiative-${initiative.id}`} className="initiative-details" hidden={!active}>
              <dl>
                <div><dt>{t.fields.why}</dt><dd>{copy.why}</dd></div>
                <div><dt>{t.fields.benefit}</dt><dd>{copy.benefit}</dd></div>
                <div><dt>{t.fields.mechanism}</dt><dd>{copy.mechanism}</dd></div>
                <div><dt>{t.fields.audience}</dt><dd>{copy.audience}</dd></div>
              </dl>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useLanguage();
  return (
    <div className="faq-list">
      {t.faq.items.map((item, index) => (
        <div key={item.question}>
          <button type="button" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} aria-controls={`faq-answer-${index}`}>
            <span>{item.question}</span><ChevronDown aria-hidden="true" className={open === index ? "rotated" : ""} />
          </button>
          <p id={`faq-answer-${index}`} hidden={open !== index}>{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

export function AskForm() {
  const questionUrl = process.env.NEXT_PUBLIC_QUESTION_FORM_URL;
  const { t } = useLanguage();
  return (
    <div className="ask-panel">
      <form action={questionUrl || undefined} method="get" target={questionUrl ? "_blank" : undefined} onSubmit={questionUrl ? undefined : (event) => event.preventDefault()}>
        <label><span>{t.form.name} <em>{t.form.optional}</em></span><input name="name" autoComplete="name" disabled={!questionUrl} /></label>
        <label><span>{t.form.grade} <em>{t.form.optional}</em></span><input name="grade" inputMode="numeric" disabled={!questionUrl} /></label>
        <label><span>{t.form.question}</span><textarea name="question" required disabled={!questionUrl} rows={4} /></label>
        <button type="submit" disabled={!questionUrl}>{t.form.submit}</button>
      </form>
      {!questionUrl && <div className="form-unavailable" role="status"><strong>{t.form.unavailable}</strong><p>{t.form.unavailableBody}</p><Link href="https://www.instagram.com/ziyatker.sc/" target="_blank" rel="noreferrer">{t.common.follow}</Link></div>}
    </div>
  );
}
