export interface Project {
  id: string;
  title: string;
  img: string;
  images?: string[]; // Additional images for gallery
  desc: string;
  longDesc?: string; // Extended description for dialog
  features?: string[]; // Key features list
  techDetails?: string; // Technical implementation details
  challenges?: string; // Challenges faced and solutions
  outcomes?: string; // Results and impact
  url?: string;
  playStore?: string;
  appStore?: string;
  github?: string;
  badge?: string;
  tags: string[];
  date: Date; // For sorting by recency
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "zontix",
    title: "Zontix",
    img: "/projects/zontix.webp",
    desc: "Developing an event management app that uses blockchain under the hood to issue NFT tickets.",
    url: "https://zontix.com",
    tags: ["Flutter", "Fintech", "Client", "Flutter Bloc", "Crypto", "Event Management"],
    date: new Date("2024-01-15"),
    featured: true,
    // Extended details to be added later
    longDesc: "",
    features: [],
    techDetails: "",
    challenges: "",
    outcomes: ""
  },
  {
    id: "firstock",
    title: "Firstock Trading App",
    img: "/projects/firstock_trading.webp",
    desc: "Developing a stock market app for a client using Flutter. The app has various features like stock trading, portfolio management, and more.",
    playStore: "https://play.google.com/store/apps/details?id=in.firstock.mobile",
    appStore: "https://apps.apple.com/us/app/firstock-trade-invest/id6746480444",
    tags: ["Flutter", "Fintech", "Client", "Flutter Bloc", "Websockets", "Trading"],
    date: new Date("2024-01-10"),
    featured: true,
    // Extended details to be added later
    longDesc: "",
    features: [],
    techDetails: "",
    challenges: "",
    outcomes: ""
  },
  {
    id: "indy",
    title: "Indy App",
    img: "/projects/indy_consumer.webp",
    desc: "Developed a Fintech app for a client in Flutter. The app has various features like UPI payments, Wallet, and more.",
    tags: ["Flutter", "Fintech", "Client", "Flutter Bloc"],
    date: new Date("2023-11-20"),
    // Extended details to be added later
    longDesc: "",
    features: [],
    techDetails: "",
    challenges: "",
    outcomes: ""
  },
  {
    id: "pragati",
    title: "Pragati ERP",
    img: "/projects/pragati.webp",
    desc: "An ERP tablet app built using Flutter for a Jewellery Client used for billing and inventory management. Currently in production and maintained by me.",
    badge: "MAINTANENCE",
    tags: ["Flutter", "ERP", "Client", "Flutter Bloc"],
    date: new Date("2023-09-15"),
    // Extended details to be added later
    longDesc: "",
    features: [],
    techDetails: "",
    challenges: "",
    outcomes: ""
  },
  {
    id: "mello",
    title: "Mello",
    img: "/projects/mello.webp",
    desc: "Developed 'Mello', a reel-based event discovery app targeting the Bangalore audience, enhancing local social engagement. Utilized MongoDB and Node.js for backend operations, Flutter for app development, Mixpanel for analytics, and Clevertap for push notifications.",
    playStore: "https://play.google.com/store/apps/details?id=com.mello.mello",
    appStore: "https://apps.apple.com/in/app/mello-weekend-event-guide/id6450921757",
    tags: ["Flutter", "Flutter Bloc", "Node.js", "MongoDB", "Mixpanel", "Clevertap", "Client", "Event Management", "Social"],
    date: new Date("2023-07-10"),
    featured: true,
    // Extended details to be added later
    longDesc: "",
    features: [],
    techDetails: "",
    challenges: "",
    outcomes: ""
  },
  {
    id: "auto-finance",
    title: "Auto Finance Canada",
    img: "/projects/van_auto.webp",
    desc: "Spearheaded the development of a comprehensive CRM web application for Auto Finance Canada, built with Flutter Web and backed by Supabase, to streamline automotive financing operations.",
    tags: ["Flutter", "Flutter Bloc", "Flutter Web", "Supabase", "CRM", "Client"],
    date: new Date("2023-05-20"),
    // Extended details to be added later
    longDesc: "",
    features: [],
    techDetails: "",
    challenges: "",
    outcomes: ""
  },
  {
    id: "rosette",
    title: "Rosette",
    img: "/projects/rosette.webp",
    desc: "Innovated a health monitoring app, 'Rosette'. incorporating smart data syncing and local storage solutions using Isar, aimed at enhancing patient care and data management,",
    tags: ["Flutter", "Flutter Bloc", "IOT", "Health", "Client"],
    date: new Date("2023-03-15"),
    // Extended details to be added later
    longDesc: "",
    features: [],
    techDetails: "",
    challenges: "",
    outcomes: ""
  },
  {
    id: "haqdarshaq",
    title: "Haqdarshaq Wallet App",
    img: "/projects/haqdarsahaq.webp",
    desc: "Developed a web application for Haqdarshaq, enabling efficient wallet and card management for their customers, leveraging Flutter Web for a responsive UI/UX design.",
    tags: ["Flutter", "Flutter Bloc", "Flutter Web", "Fintech", "Client"],
    date: new Date("2023-01-10"),
    // Extended details to be added later
    longDesc: "",
    features: [],
    techDetails: "",
    challenges: "",
    outcomes: ""
  },
  {
    id: "dota2-soundboard",
    title: "Dota 2 Soundboard App",
    img: "/projects/dota2sounboard.webp",
    desc: "Built a music board for a game I used to play called Dota2Soundboard using the Flutter UI Development Kit and GetX state management and SQFlite. MAU of 1.5k+ users with more than 10k+ downloads.",
    tags: ["Flutter", "GetX", "Gaming", "Personal"],
    date: new Date("2022-11-20"),
    // Extended details to be added later
    longDesc: "",
    features: [],
    techDetails: "",
    challenges: "",
    outcomes: ""
  },
  {
    id: "bridgeman",
    title: "The Bridgeman",
    img: "/projects/bridgeman.webp",
    desc: "Built a contact website for a client The Bridgeman using Flutter Web.",
    url: "https://hello.thebridgeman.in/",
    tags: ["Flutter Web", "Client"],
    date: new Date("2022-09-15"),
    // Extended details to be added later
    longDesc: "",
    features: [],
    techDetails: "",
    challenges: "",
    outcomes: ""
  },
  {
    id: "hr-designs",
    title: "HR Designs",
    img: "/projects/hrdesigns.webp",
    desc: "Built a website for a client HR Designs using Bootstrap and HTML/CSS.",
    url: "https://hrdesigns.in/",
    tags: ["HTML", "Bootstrap", "Client"],
    date: new Date("2022-07-10"),
    // Extended details to be added later
    longDesc: "",
    features: [],
    techDetails: "",
    challenges: "",
    outcomes: ""
  }
];

// Get all projects sorted by date (most recent first)
export const getAllProjects = () => {
  return [...projects].sort((a, b) => b.date.getTime() - a.date.getTime());
};

// Get featured projects
export const getFeaturedProjects = () => {
  return projects.filter(p => p.featured).sort((a, b) => b.date.getTime() - a.date.getTime());
};

// Get recent projects
export const getRecentProjects = (count: number = 3) => {
  return getAllProjects().slice(0, count);
};

// Get project by ID
export const getProjectById = (id: string) => {
  return projects.find(p => p.id === id);
};