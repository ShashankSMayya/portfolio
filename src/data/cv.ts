// Source of truth for scripts/generate-resume.ts; keep in sync with src/pages/cv.astro.

export interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
  link?: string;
}

export const cv = {
  name: "Shashank S Mayya",
  role: "Senior Flutter Developer & Mobile App Specialist",
  location: "Mangalore, India",
  email: "shashanksmayya@gmail.com",
  website: "https://shashanksmayya.dev",
  linkedin: "https://www.linkedin.com/in/shashank-mayya",

  // Ids from src/data/projects.ts (must have resumeHighlights), in resume display order
  resumeProjectIds: ["firstock", "outfit-formulas", "zontix", "tacticx", "dota2-soundboard"],

  summary:
    "Flutter developer with 5+ years of experience building apps where reliability matters. " +
    "Specialized in fintech, trading platforms, and AI consumer apps, including a stock trading " +
    "platform for a SEBI-registered broker that serves thousands of live traders. 10+ apps shipped " +
    "for clients across India, Canada, Ireland, and the US.",

  experience: [
    {
      title: "Freelance Flutter Developer",
      company: "Self-Employed",
      period: "Apr 2023 - Present",
      summary:
        "Freelance Flutter development for clients across fintech, consumer, and enterprise. " +
        "Currently the lead mobile developer on Outfit Formulas, an AI-powered outfit planning app.",
      highlights: [
        "Delivered 10+ production apps end-to-end for clients across India, Canada, Ireland, and the US",
        "Built a stock trading platform for a SEBI-registered broker, serving thousands of live traders during market hours",
        "Lead mobile developer on Outfit Formulas, an AI-powered styling app with subscriptions and experiment-driven onboarding",
        "Wrote unit and widget test suites for Outfit Formulas and unit tests for the Pragati ERP client app",
        "Shipped blockchain ticketing with non-custodial wallet security and QR/NFC check-in for a European events client",
        "Integrated AI backends, real-time WebSocket pipelines, payments (RevenueCat, Stripe), and analytics (PostHog, Braze)",
      ],
      tech: ["Flutter", "Dart", "Firebase", "Supabase", "BLoC", "WebSockets", "RevenueCat", "PostHog"],
    },
    {
      title: "Software Engineer",
      company: "Realtime Innovations",
      location: "Dublin, Ireland",
      period: "Dec 2022 - Apr 2023",
      summary:
        "Collaborated with an international team to build the Mevolve healthcare application using Flutter and Firebase.",
      highlights: [
        "Optimized Firebase operations reducing costs by 40%",
        "Implemented custom caching with Isar Database",
        "Worked with Cloud Functions for backend operations",
        "Improved app performance and user experience",
      ],
      tech: ["Flutter", "Firebase", "Isar DB", "Cloud Functions", "Performance Optimization"],
    },
    {
      title: "Flutter App Developer",
      company: "Mindstack Technologies",
      location: "Mangaluru, India",
      period: "Jul 2021 - Dec 2022",
      summary:
        "Built fintech apps from scratch, focused on payment systems and financial services.",
      highlights: [
        "Developed 3 fintech apps from design to production",
        "Integrated payment gateways and financial APIs",
        "Implemented BLOC architecture and dependency injection",
        "Set up CI/CD pipelines and analytics tracking",
      ],
      tech: ["Flutter", "BLoC", "Hive", "GetIt", "Payment Gateways"],
    },
  ] satisfies Experience[],

  skills: [
    {
      category: "Mobile Development",
      skills: ["Flutter", "Dart", "iOS Dev", "Android Dev", "Flutter Web"],
    },
    {
      category: "Backend & Database",
      skills: ["Firebase", "Supabase", "TypeScript", "Hive DB", "Isar DB"],
    },
    {
      category: "Architecture & Tools",
      skills: ["BLoC Pattern", "Clean Architecture", "Unit & Widget Testing", "Git & CI/CD", "REST APIs", "WebSockets"],
    },
  ] satisfies SkillCategory[],

  education: [
    {
      degree: "Bachelor of Engineering - Computer Science",
      institution: "AJ Institute of Engineering and Technology, Mangaluru",
      period: "2017 - 2024",
    },
    {
      degree: "Pre-University Course (Science)",
      institution: "Sharada PU College, Mangaluru",
      period: "2015 - 2017",
    },
  ] satisfies Education[],

  achievements: [
    {
      title: "GDG Mangalore Speaker",
      date: "December 2023",
      description:
        'Conducted a technical talk on "Building Scalable Flutter Applications" for Google Developer Group Mangalore community.',
      link: "https://www.linkedin.com/posts/shashank-mayya_how-to-build-scalable-flutter-applications-activity-7145424874700808192-NVH3",
    },
    {
      title: "IEEE Mangalore Presentation",
      date: "2023",
      description:
        'Presented "Flutter BLOC State Management in Production" to IEEE Mangalore Subsection, sharing real-world implementation insights.',
      link: "http://www.youtube.com/watch?v=l5uXoizNPOA",
    },
    {
      title: "Flutter Mentorship Program",
      date: "2022-2023",
      description:
        "Mentored a team of students in developing an IoT-based Flutter application for Rosette Smart Bottles startup.",
    },
  ] satisfies Achievement[],
};
