export type Achievement = { id: string };
export type TeamMetric = { id: string; value: string; source: "CV" };

export type TeamMember = {
  id: string;
  number: string;
  name: string;
  firstName: string;
  lastName: string;
  portrait: string;
  imagePosition: string;
  imageScale: number;
  achievements: Achievement[];
  metrics?: TeamMetric[];
};

export type InitiativeStage = "proposal" | "planning" | "outreach" | "pilot" | "active";
export type InitiativeGroupId = "career" | "academics" | "student" | "community";
export type Initiative = { id: string; number: string; group: InitiativeGroupId; stage: InitiativeStage };

export type JournalPost = {
  slug: string;
  image: string;
  imageAlt: string;
  date?: string;
  time?: string;
  location?: string;
};

export const team: TeamMember[] = [
  {
    id: "alaziza", number: "01", name: "Alaziza Lukpanova", firstName: "ALAZIZA", lastName: "LUKPANOVA",
    portrait: "/images/team/alaziza-portrait.jpg", imagePosition: "50% 34%", imageScale: 1,
    achievements: [{ id: "academics" }, { id: "idp-internship" }, { id: "student-government" }, { id: "sen-foundation" }, { id: "flood-relief" }, { id: "nomad-study-hub" }],
    metrics: [
      { id: "gpa", value: "5.0/5.0", source: "CV" },
      { id: "interns", value: "20", source: "CV" },
      { id: "charity-students", value: "600+", source: "CV" },
      { id: "scholarship", value: "$36K", source: "CV" },
      { id: "career-attendees", value: "350+", source: "CV" },
      { id: "government-attendance", value: "300+", source: "CV" },
      { id: "relief-hours", value: "150+", source: "CV" },
      { id: "families", value: "4,000+", source: "CV" },
      { id: "students-coordinated", value: "100+", source: "CV" },
    ],
  },
  { id: "malika", number: "02", name: "Malika Zhakenova", firstName: "MALIKA", lastName: "ZHAKENOVA", portrait: "/images/team/malika-portrait.jpg", imagePosition: "50% 34%", imageScale: .9, achievements: [{ id: "chess-club" }, { id: "debate-club" }] },
  { id: "alfarabi", number: "03", name: "Alfarabi Serik", firstName: "ALFARABI", lastName: "SERIK", portrait: "/images/team/alfarabi-portrait.jpg", imagePosition: "50% 31%", imageScale: .97, achievements: [{ id: "wave-dance" }] },
];

export const initiatives: Initiative[] = [
  { id: "internships", number: "01", group: "career", stage: "proposal" },
  { id: "educonnect", number: "02", group: "academics", stage: "proposal" },
  { id: "care", number: "03", group: "community", stage: "proposal" },
  { id: "marathons", number: "04", group: "academics", stage: "proposal" },
  { id: "ielts", number: "05", group: "academics", stage: "proposal" },
  { id: "opportunity-hub", number: "06", group: "career", stage: "proposal" },
  { id: "career-shadow", number: "07", group: "career", stage: "proposal" },
  { id: "mentor-network", number: "08", group: "academics", stage: "proposal" },
  { id: "microgrants", number: "09", group: "student", stage: "proposal" },
  { id: "open-clubs", number: "10", group: "student", stage: "proposal" },
  { id: "project-showcase", number: "11", group: "student", stage: "proposal" },
  { id: "alumni-talks", number: "12", group: "career", stage: "proposal" },
  { id: "feedback-loop", number: "13", group: "community", stage: "proposal" },
  { id: "zizi-rewards", number: "14", group: "community", stage: "proposal" },
];

export const initiativeGroupOrder: InitiativeGroupId[] = ["career", "academics", "student", "community"];

export const homepageInitiativeIds = ["internships", "opportunity-hub", "educonnect", "mentor-network", "microgrants", "marathons", "care"];

export const journalPosts: JournalPost[] = [
  { slug: "meet-ziyatker", image: "/images/campaign/originals/meet-ziyatker.png", imageAlt: "Meet Ziyatker campaign poster featuring Alfarabi, Alaziza, and Malika" },
  { slug: "active-break", image: "/images/campaign/originals/active-break-main.png", imageAlt: "Active Break campaign poster showing movement, games, basketball, and outdoor activities" },
  { slug: "active-break-zizi", image: "/images/campaign/originals/active-break-zizi.png", imageAlt: "Active Break poster showing armwrestling, board games, dancing, and ZIZI coins" },
  { slug: "mesk-marathon", image: "/images/campaign/originals/mesk-marathon.png", imageAlt: "МЭСК marathon campaign poster for grade 10 students" },
  { slug: "kpop-random-dance", image: "/images/campaign/originals/kpop-random-dance.png", imageAlt: "KPOP Random Dance campaign poster", date: "01 OCTOBER", time: "15:35", location: "CHOREOGRAPHY HALL" },
  { slug: "origami-therapy", image: "/images/campaign/originals/origami-therapy.png", imageAlt: "Origami therapy campaign poster", time: "12:30 / 13:40", location: "ОРАНЖЕРЕЯ" },
  { slug: "meme-brainrot", image: "/images/campaign/originals/meme-brainrot.png", imageAlt: "Campaign meme poster inviting grades 7 to 9 to the orangery auditorium" },
  { slug: "never-have-i-ever", image: "/images/campaign/originals/never-have-i-ever.png", imageAlt: "Never Have I Ever school bingo campaign poster" },
  { slug: "stories-day", image: "/images/campaign/originals/stories-day.png", imageAlt: "Stories Day campaign poster featuring a student story" },
  { slug: "zizi-coin", image: "/images/campaign/originals/zizi-coin.png", imageAlt: "ZIZI coin campaign reward concept poster" },
];
