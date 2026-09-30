"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq, gradeImpact, initiatives } from "@/content/campaign";

export function GradeImpact() {
  const grades = ["7–9", "10", "11", "12"];
  const [grade, setGrade] = useState(grades[0]);
  return (
    <div className="impact-explorer">
      <div className="grade-tabs" role="tablist" aria-label="Choose grade">
        {grades.map((item) => (
          <button key={item} type="button" role="tab" aria-selected={grade === item} onClick={() => setGrade(item)}>{item}</button>
        ))}
      </div>
      <div className="impact-list" role="tabpanel">
        {gradeImpact[grade].map((item, index) => (
          <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
        ))}
      </div>
      <p className="proposal-note">Student-facing possibilities based on the proposed 2026–2027 program.</p>
    </div>
  );
}

export function InitiativesAccordion() {
  const [open, setOpen] = useState(initiatives[0].id);
  return (
    <div className="initiative-list">
      {initiatives.map((initiative) => {
        const active = open === initiative.id;
        return (
          <article className={active ? "is-open" : ""} key={initiative.id}>
            <button type="button" onClick={() => setOpen(active ? "" : initiative.id)} aria-expanded={active} aria-controls={`initiative-${initiative.id}`}>
              <span>{initiative.number}</span><h3>{initiative.title}</h3><span>{active ? "−" : "+"}</span>
            </button>
            <div id={`initiative-${initiative.id}`} className="initiative-details" hidden={!active}>
              <dl>
                <div><dt>PROBLEM</dt><dd>{initiative.problem}</dd></div>
                <div><dt>WHAT CHANGES</dt><dd>{initiative.change}</dd></div>
                <div><dt>HOW IT COULD WORK</dt><dd>{initiative.mechanism}</dd></div>
                <div><dt>WHO BENEFITS</dt><dd>{initiative.audience}</dd></div>
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
  return (
    <div className="faq-list">
      {faq.map((item, index) => (
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
  return (
    <div className="ask-panel">
      <form action={questionUrl || undefined} method="get" target={questionUrl ? "_blank" : undefined} onSubmit={questionUrl ? undefined : (event) => event.preventDefault()}>
        <label><span>Name <em>optional</em></span><input name="name" autoComplete="name" disabled={!questionUrl} /></label>
        <label><span>Grade <em>optional</em></span><input name="grade" inputMode="numeric" disabled={!questionUrl} /></label>
        <label><span>Question</span><textarea name="question" required disabled={!questionUrl} rows={4} /></label>
        <button type="submit" disabled={!questionUrl}>ASK ZIYATKER</button>
      </form>
      {!questionUrl && <p role="status">Question form will be available soon. For now, follow @ziyatker.sc for updates.</p>}
    </div>
  );
}
