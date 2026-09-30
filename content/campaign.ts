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
  problem: string;
  change: string;
  mechanism: string;
  audience: string;
};

export type JournalPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: string[];
  quote?: string;
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
    problem: "Career choices are difficult without seeing real work up close.",
    change: "More opportunities to understand professions through practical exposure.",
    mechanism: "Pursue internship pathways with major organizations. Halyk Bank and BI Group are portfolio examples, not confirmed partnerships.",
    audience: "Students exploring future study and career directions.",
  },
  {
    id: "educonnect",
    number: "02",
    title: "EDUCONNECT",
    problem: "Students in rural schools do not always have equal access to academic support.",
    change: "A student-to-student learning network across western Kazakhstan.",
    mechanism: "NIS students would support rural-school students in mathematics, physics, and other academic subjects.",
    audience: "NIS volunteers and students in rural schools.",
  },
  {
    id: "care",
    number: "03",
    title: "ШЕКСІЗ ҚАМҚОРЛЫҚ",
    problem: "Community support works best when it is regular and practical.",
    change: "Consistent engagement with children’s homes and elderly care homes.",
    mechanism: "Proposed monthly visits, learning-material donation, EduConnect teaching, and basic digital-literacy support.",
    audience: "Student volunteers, children, and elderly community members.",
  },
  {
    id: "marathons",
    number: "04",
    title: "ACADEMIC MARATHONS",
    problem: "Exam preparation is easier when students can learn from people who have already completed the process.",
    change: "Focused peer and alumni guidance for major exams.",
    mechanism: "Subject and exam marathons around МЭСК, IELTS, SAT, CSCA, and other relevant assessments.",
    audience: "Students in grades 10, 11, and 12.",
  },
  {
    id: "ielts",
    number: "05",
    title: "IELTS / IDP",
    problem: "Students need dependable preparation guidance and useful materials.",
    change: "A stronger, more regular IELTS preparation pathway.",
    mechanism: "Pursue recurring workshops and access to preparation materials with IDP IELTS Kazakhstan as a proposed direction.",
    audience: "Students preparing for IELTS.",
  },
];

export const journalPosts: JournalPost[] = [
  {
    slug: "meet-ziyatker",
    title: "Meet Ziyatker",
    category: "Team",
    excerpt: "The campaign introduction: three students, three roles, one shared program for NIS Atyrau.",
    image: "/images/campaign/meet-ziyatker.png",
    imageAlt: "Meet Ziyatker campaign poster featuring Alfarabi, Alaziza, and Malika",
    body: [
      "ZIYATKER is Alaziza Lukpanova for President, Malika Zhakenova for Prime Minister, and Alfarabi Serik for Secretary.",
      "Their campaign brings together documented experience in education, career guidance, clubs, debate, performance, and community work with a proposed program for 2026–2027.",
    ],
    quote: "ZIYATKER ekenindi Ūmytpa!",
  },
  {
    slug: "active-break",
    title: "Active Break",
    category: "Campaign Activity",
    excerpt: "A campaign activity built around movement, play, and a more energetic school break.",
    image: "/images/campaign/active-break-crop.png",
    imageAlt: "Active Break campaign collage with outdoor games and student activities",
    body: [
      "Active Break brought movement and shared play into the campaign’s visual language.",
      "The supplied campaign artwork documents outdoor games and an invitation for students to join an active break together.",
    ],
  },
  {
    slug: "mesk-marathon",
    title: "МЭСК Marathon",
    category: "Academic Support",
    excerpt: "A campaign post introducing a focused academic marathon for grade 10 students.",
    image: "/images/campaign/mesk-marathon-crop.png",
    imageAlt: "МЭСК Marathon campaign poster for grade 10 students",
    body: [
      "The МЭСК Marathon campaign post focused on grade 10 students and listed mathematics, history of Kazakhstan, Russian, Kazakh, language, and core subjects.",
      "Academic and exam marathons are also part of ZIYATKER’s proposed 2026–2027 program for students in grades 10–12.",
    ],
  },
  {
    slug: "meme-brainrot",
    title: "Meme or Brainrot?",
    category: "Campaign Activity",
    excerpt: "A playful 7–9 grade activity from the campaign’s social feed.",
    image: "/images/campaign/meme-brainrot-crop.png",
    imageAlt: "Meme or Brainrot campaign graphic for grades 7 to 9",
    body: [
      "The campaign used humor as one way to meet students where they are.",
      "This supplied post documents a playful activity for grades 7–9 without adding claims or dates beyond the original graphic.",
    ],
  },
  {
    slug: "vote-ziyatker",
    title: "Vote for Ziyatker",
    category: "Campaign Video",
    excerpt: "A still from the campaign video: ‘The greatest students vote for Ziyatker.’",
    image: "/images/campaign/vote-sign-video-thumbnail.png",
    imageAlt: "Student holding a pink sign that reads The greatest students vote for Ziyatker",
    body: [
      "This video thumbnail is part of the current campaign archive and is presented here as supplied.",
      "Follow campaign updates through the official handle @ziyatker.sc.",
    ],
  },
];

export const gradeImpact: Record<string, string[]> = {
  "7–9": ["Academic activities", "EduConnect participation", "Community initiatives"],
  "10": ["МЭСК and academic preparation", "Career exposure", "Community initiatives"],
  "11": ["IELTS and SAT preparation", "Internship pathways", "Alumni experience"],
  "12": ["Exam analysis and alumni guidance", "Career exposure", "Community leadership"],
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
