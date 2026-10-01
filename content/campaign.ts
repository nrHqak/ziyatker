export type Achievement = {
  project: string;
  role: string;
  action: string;
  impact: string;
};

export type TeamMember = {
  id: string;
  number: string;
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  portrait: string;
  imagePosition: string;
  achievements: Achievement[];
};

export type Initiative = {
  id: string;
  number: string;
  title: string;
  summary: string;
  why: string;
  studentBenefit: string;
  mechanism: string;
  audience: string;
  status: string;
};

export type GradeImpactItem = {
  category: string;
  title: string;
  description: string;
};

export type JournalPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const team: TeamMember[] = [
  {
    id: "alaziza",
    number: "01",
    name: "Alaziza Lukpanova",
    firstName: "ALAZIZA",
    lastName: "LUKPANOVA",
    role: "President",
    portrait: "/images/team/alaziza-portrait.jpg",
    imagePosition: "50% 35%",
    achievements: [
      {
        project: "Rural English Teaching",
        role: "Teacher and organizer",
        action: "Delivered free, offline academic English lessons for students in grades 5–9 in remote rural areas.",
        impact: "Expanded access to academic English learning outside the city.",
      },
      {
        project: "Career Fest 2025",
        role: "Organizer",
        action: "Created an international education and career-guidance event with workshops for students and parents, including cooperation with official representatives of IDP IELTS.",
        impact: "Reached more than 400 students across the city.",
      },
    ],
  },
  {
    id: "malika",
    number: "02",
    name: "Malika Zhakenova",
    firstName: "MALIKA",
    lastName: "ZHAKENOVA",
    role: "Prime Minister",
    portrait: "/images/team/malika-portrait.jpg",
    imagePosition: "50% 30%",
    achievements: [
      {
        project: "Chess Club",
        role: "Founder and team lead",
        action: "Led a 15-person team and organized an innovative chess problem-solving tournament.",
        impact: "Around 20 students participated in the tournament.",
      },
      {
        project: "Debate Club",
        role: "Organizer and workshop facilitator",
        action: "Supported club activities, helped younger students develop argumentation, and led WSDC-format workshops.",
        impact: "Created structured opportunities to practise debate and argumentation.",
      },
    ],
  },
  {
    id: "alfarabi",
    number: "03",
    name: "Alfarabi Serik",
    firstName: "ALFARABI",
    lastName: "SERIK",
    role: "Secretary",
    portrait: "/images/team/alfarabi-portrait.jpg",
    imagePosition: "50% 28%",
    achievements: [
      {
        project: "Wave Dance Club",
        role: "Vice-president and team lead",
        action: "Led a 10-person team and helped stage performances for Zhaz Fest 2026, Art Fest 2026, the Қамқоржан charity initiative, and school events.",
        impact: "Helped students bring creative work to major school stages.",
      },
    ],
  },
];

export const initiatives: Initiative[] = [
  {
    id: "internships",
    number: "01",
    title: "INTERNSHIPS",
    summary: "Proposed professional exposure before students commit to a university direction.",
    why: "Students often choose university directions without having seen the profession in a real working environment.",
    studentBenefit: "Exposure to professional environments and a clearer understanding of possible career paths.",
    mechanism: "Pursue internship pathways with major organizations. Halyk Bank and BI Group are portfolio examples, not confirmed partnerships.",
    audience: "Students exploring future study and career directions.",
    status: "Proposed initiative. No partner or placement is confirmed.",
  },
  {
    id: "educonnect",
    number: "02",
    title: "EDUCONNECT",
    summary: "A proposed student-to-student academic support network across western Kazakhstan.",
    why: "Students in rural schools do not always have equal access to subject support and peer guidance.",
    studentBenefit: "NIS volunteers gain teaching experience while rural-school students receive additional academic support.",
    mechanism: "NIS students would support rural-school students in mathematics, physics, and other academic subjects.",
    audience: "NIS volunteers and students in rural schools.",
    status: "Proposed initiative; participation details are not yet published.",
  },
  {
    id: "care",
    number: "03",
    title: "ШЕКСІЗ ҚАМҚОРЛЫҚ",
    summary: "A proposed framework for regular, practical community service.",
    why: "Community support has more value when it is consistent, useful, and connected to real needs.",
    studentBenefit: "Structured opportunities to contribute time, learning support, and basic digital-literacy help.",
    mechanism: "Proposed monthly visits, learning-material donation, EduConnect teaching, and basic digital-literacy support.",
    audience: "Student volunteers, children, and elderly community members.",
    status: "Proposed initiative; frequency and host organizations are not yet confirmed.",
  },
  {
    id: "marathons",
    number: "04",
    title: "ACADEMIC MARATHONS",
    summary: "Focused preparation sessions built around peer and alumni experience.",
    why: "Exam preparation is easier when students can learn from people who have already completed the process.",
    studentBenefit: "Exam-specific guidance, shared strategies, and a clearer view of preparation priorities.",
    mechanism: "Subject and exam marathons around МЭСК, IELTS, SAT, CSCA, and other relevant assessments.",
    audience: "Students in grades 10, 11, and 12, where relevant to each assessment.",
    status: "Proposed initiative; subjects, dates, and eligibility are not yet published.",
  },
  {
    id: "ielts",
    number: "05",
    title: "IELTS / IDP",
    summary: "A proposed pathway for more regular IELTS guidance and preparation resources.",
    why: "Students need dependable preparation guidance and useful materials when planning for IELTS.",
    studentBenefit: "More structured preparation guidance and access to useful learning materials.",
    mechanism: "Pursue recurring workshops and access to preparation materials with IDP IELTS Kazakhstan as a proposed direction.",
    audience: "Students preparing for IELTS.",
    status: "Proposed initiative. Recurring cooperation with IDP IELTS Kazakhstan is not confirmed.",
  },
];

export const journalPosts: JournalPost[] = [
  {
    slug: "meet-ziyatker",
    title: "Meet Ziyatker",
    category: "Team",
    date: "DATE NOT CONFIRMED",
    description: "The campaign introduction: three students, three roles, one shared program for NIS Atyrau.",
    image: "/images/campaign/meet-ziyatker.png",
    imageAlt: "Meet Ziyatker campaign poster featuring Alfarabi, Alaziza, and Malika",
  },
  {
    slug: "vote-ziyatker",
    title: "Vote for Ziyatker",
    category: "Campaign Video",
    date: "DATE NOT CONFIRMED",
    description: "A still from the campaign video: ‘The greatest students vote for Ziyatker.’",
    image: "/images/campaign/vote-sign-video-thumbnail.png",
    imageAlt: "Student holding a pink sign that reads The greatest students vote for Ziyatker",
  },
];

export const gradeImpact: Record<string, GradeImpactItem[]> = {
  "7–9": [
    { category: "ACADEMIC PARTICIPATION", title: "Learn by joining in", description: "Take part in age-relevant academic activities and peer-led learning where places are available." },
    { category: "EDUCONNECT", title: "A possible first teaching role", description: "Older students may later be able to support EduConnect; younger grades can see how the network works and prepare to contribute." },
    { category: "COMMUNITY", title: "Practical care in action", description: "Join suitable school-community activities connected to the proposed Шексіз қамқорлық direction." },
  ],
  "10": [
    { category: "ACADEMIC SUPPORT", title: "МЭСК and subject marathons", description: "Access focused preparation formats inspired by peer and alumni experience, if the proposed marathons proceed." },
    { category: "CAREER ORIENTATION", title: "See possible directions earlier", description: "Career-guidance formats inspired by the team’s documented Career Fest experience could help students compare future paths." },
    { category: "COMMUNITY", title: "Contribute with purpose", description: "Take part in practical volunteer activity through proposed community initiatives where appropriate." },
  ],
  "11": [
    { category: "EXAM PREPARATION", title: "IELTS, SAT, and academic marathons", description: "Learn from structured peer and alumni guidance for relevant exams if the proposed sessions are launched." },
    { category: "CAREER EXPOSURE", title: "Explore work before choosing", description: "Proposed company-exposure or internship pathways could help clarify university and career directions; no placement is guaranteed." },
    { category: "GUIDANCE", title: "Use experience already earned", description: "Peer and alumni perspectives could make preparation choices more concrete and less isolated." },
  ],
  "12": [
    { category: "APPLICATION EXPERIENCE", title: "Turn recent experience into guidance", description: "Share and access practical exam and application lessons through proposed peer and alumni formats." },
    { category: "GUIDANCE", title: "Plan the next transition", description: "Use relevant peer and alumni perspectives to compare study and career directions." },
    { category: "PROFESSIONAL EXPOSURE", title: "Connect plans to real work", description: "Proposed career and company-exposure formats could offer a clearer view of professional environments; availability is not confirmed." },
  ],
};

export const faq = [
  {
    question: "How will internships work?",
    answer: "The program proposes pursuing real-world internship pathways with major organizations. The organizations named in the portfolio are examples of intended directions, not confirmed partnerships.",
  },
  {
    question: "Who can participate in EduConnect?",
    answer: "The concept connects NIS student volunteers in the western region with students from rural schools who need support in mathematics, physics, and other academic subjects.",
  },
  {
    question: "How will academic marathons work?",
    answer: "The proposed format brings together advice and analysis from students or alumni who have already completed exams such as МЭСК, IELTS, SAT, and CSCA.",
  },
  {
    question: "How can students participate?",
    answer: "Participation details have not yet been published. Follow @ziyatker.sc for confirmed campaign updates and opportunities.",
  },
  {
    question: "Where can I follow campaign updates?",
    answer: "The confirmed campaign handle is @ziyatker.sc. This site’s Journal also collects the supplied campaign activities in one place.",
  },
] as const;
