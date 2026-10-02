export type Achievement = { id: string };

export type TeamMember = {
  id: string;
  number: string;
  name: string;
  firstName: string;
  lastName: string;
  portrait: string;
  imagePosition: string;
  achievements: Achievement[];
};

export type Initiative = { id: string; number: string };

export type JournalPost = {
  slug: string;
  image: string;
  imageAlt: string;
  date?: string;
  time?: string;
  location?: string;
};

export const team: TeamMember[] = [
  { id: "alaziza", number: "01", name: "Alaziza Lukpanova", firstName: "ALAZIZA", lastName: "LUKPANOVA", portrait: "/images/team/alaziza-portrait.jpg", imagePosition: "50% 35%", achievements: [{ id: "rural-english" }, { id: "career-fest" }] },
  { id: "malika", number: "02", name: "Malika Zhakenova", firstName: "MALIKA", lastName: "ZHAKENOVA", portrait: "/images/team/malika-portrait.jpg", imagePosition: "50% 30%", achievements: [{ id: "chess-club" }, { id: "debate-club" }] },
  { id: "alfarabi", number: "03", name: "Alfarabi Serik", firstName: "ALFARABI", lastName: "SERIK", portrait: "/images/team/alfarabi-portrait.jpg", imagePosition: "50% 28%", achievements: [{ id: "wave-dance" }] },
];

export const initiatives: Initiative[] = [
  { id: "internships", number: "01" },
  { id: "educonnect", number: "02" },
  { id: "care", number: "03" },
  { id: "marathons", number: "04" },
  { id: "ielts", number: "05" },
];

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
