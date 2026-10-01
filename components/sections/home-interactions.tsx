"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq, gradeImpact, initiatives } from "@/content/campaign";

export function GradeImpact() {
  const grades = ["7–9", "10", "11", "12"];
  const [grade, setGrade] = useState(grades[0]);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function moveTab(currentIndex: number, direction: number) {
    const nextIndex = (currentIndex + direction + grades.length) % grades.length;
    setGrade(grades[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="impact-explorer">
      <div className="grade-prompt">
        <strong lang="kk">СЫНЫБЫҢДЫ ТАҢДА</strong>
        <span>CHOOSE YOUR GRADE</span>
      </div>
      <div className="grade-tabs" role="tablist" aria-label="Choose grade">
        {grades.map((item, index) => (
          <button
            key={item}
            ref={(element) => { tabRefs.current[index] = element; }}
            type="button"
            role="tab"
            id={`grade-tab-${index}`}
            aria-controls="grade-impact-panel"
            aria-selected={grade === item}
            tabIndex={grade === item ? 0 : -1}
            onClick={() => setGrade(item)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") { event.preventDefault(); moveTab(index, 1); }
              if (event.key === "ArrowLeft") { event.preventDefault(); moveTab(index, -1); }
              if (event.key === "Home") { event.preventDefault(); setGrade(grades[0]); tabRefs.current[0]?.focus(); }
              if (event.key === "End") { event.preventDefault(); setGrade(grades[grades.length - 1]); tabRefs.current[grades.length - 1]?.focus(); }
            }}
          >{item}</button>
        ))}
      </div>
      <div key={grade} id="grade-impact-panel" className="impact-list" role="tabpanel" aria-labelledby={`grade-tab-${grades.indexOf(grade)}`}>
        {gradeImpact[grade].map((item, index) => (
          <article key={item.title}>
            <span>0{index + 1} / {item.category}</span>
            <div><h3>{item.title}</h3><p>{item.description}</p></div>
          </article>
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
              <span>{initiative.number}</span><h3 lang={initiative.id === "care" ? "kk" : undefined}>{initiative.title}</h3><span>{active ? "−" : "+"}</span>
            </button>
            <div id={`initiative-${initiative.id}`} className="initiative-details" hidden={!active}>
              <dl>
                <div><dt>WHY</dt><dd>{initiative.why}</dd></div>
                <div><dt>WHAT STUDENTS GET</dt><dd>{initiative.studentBenefit}</dd></div>
                <div><dt>HOW IT COULD WORK</dt><dd>{initiative.mechanism}</dd></div>
                <div><dt>WHO IT IS FOR</dt><dd>{initiative.audience}</dd></div>
                <div className="initiative-status"><dt>STATUS</dt><dd>{initiative.status}</dd></div>
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
      {!questionUrl && (
        <div className="form-unavailable" role="status">
          <strong>QUESTION FORM IS NOT CONNECTED YET.</strong>
          <p>No submission has been sent. Campaign updates and contact options remain available on the official account.</p>
          <Link href="https://www.instagram.com/ziyatker.sc/" target="_blank" rel="noreferrer">FOLLOW @ZIYATKER.SC ↗</Link>
        </div>
      )}
    </div>
  );
}
