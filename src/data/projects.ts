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
        id: "tacticx",
        title: "TacticX",
        img: "/projects/tacticx.webp",
        desc: "A crypto options trading platform built with Flutter Web (WASM) featuring real-time market data, visual strategy builder, and advanced position analysis.",
        longDesc: "TacticX is a professional-grade crypto options trading platform designed for derivatives traders. Built as a Progressive Web App using Flutter's WASM compilation for near-native performance, it enables traders to analyze options chains, construct multi-leg strategies visually, and monitor positions with real-time Greeks calculations. The platform connects to crypto exchanges via a unified WebSocket backend, providing seamless market data streaming with sub-second latency.",
        features: [
          "Real-time options chain with live bid/ask spreads and open interest",
          "Visual strategy builder using node-based interface for multi-leg positions",
          "Interactive payoff diagrams with break-even analysis",
          "Position Greeks analysis (Delta, Gamma, Theta, Vega)",
          "WebSocket-powered live ticker updates with background isolate parsing",
          "Light/dark theme support with custom design system",
          "Session management with inactivity monitoring"
        ],
        techDetails: "Built with Flutter Web compiled to WASM for optimal performance. Architecture follows a pragmatic 3-layer pattern (Screens → Cubits → Repositories → Services) with Flutter Bloc for state management. Uses dart_mappable for JSON serialization, auto_route for type-safe navigation, and injectable/get_it for dependency injection. WebSocket service implements reference-counted subscriptions with auto-reconnect and exponential backoff. Background message parsing via Dart isolates ensures UI responsiveness during high-frequency market updates.",
        challenges: "Handling high-frequency WebSocket data without blocking the UI required implementing isolate-based message parsing. Building a flexible visual strategy builder that supports arbitrary option leg combinations while maintaining accurate payoff calculations. Ensuring consistent styling across web platforms with a custom theme extension system.",
        outcomes: "Delivered a production-ready trading platform with professional-grade UX. The WASM compilation provides smooth 60fps interactions even during volatile market conditions with heavy data streaming.",
        badge: "IN DEVELOPMENT",
        tags: ["Flutter", "Flutter Web", "WASM", "Flutter Bloc", "Crypto", "Trading", "Fintech", "WebSockets", "Personal"],
        date: new Date("2025-01-11"),
        url:"https://tacticx.trade",
        featured: true
      },
   {
      id: "zontix",
      title: "Zontix",
      img: "/projects/zontix.webp",
      desc: "A cross-platform event management app leveraging MultiversX blockchain to issue NFT-based tickets, featuring secure wallet management, QR/NFC-based check-ins, and integrated payment processing.",
      url: "https://zontix.com",
      tags: ["Flutter", "Fintech", "Client", "Flutter Bloc", "Crypto", "Event Management", "MultiversX", "NFT", "Firebase", "NFC"],
      date: new Date("2024-01-15"),
      featured: true,

      longDesc: "Zontix is a comprehensive event management and ticketing platform that bridges Web2 convenience with Web3 innovation. The app enables event organizers to create, manage, and monetize events while issuing blockchain-backed NFT tickets on the MultiversX network. Attendees benefit from secure, tamper-proof digital tickets stored in non-custodial wallets, with seamless check-in via QR codes or NFC badges. The platform supports multiple payment methods including Google Pay, Apple Pay, and traditional card payments, making blockchain ticketing accessible to mainstream users.",

      features: [
        "NFT ticket issuance on MultiversX blockchain with XOXNO SDK integration",
        "Non-custodial wallet management with BIP44 HD wallet generation and Shamir's Secret Sharing for secure seed phrase backup",
        "Multi-method event check-in: QR code scanning and NFC badge support (Android NFC Reader + iOS NFC/Peer modes)",
        "Comprehensive event management dashboard with guest lists, team roles, referral programs, and voucher systems",
        "Integrated payment processing via Google Pay, Apple Pay, and card payments with XMoneyPay gateway",
        "Firebase authentication with Google Sign-In and biometric (fingerprint/Face ID) security",
        "Offline-first architecture with intelligent caching and graceful degradation",
        "Multi-language support (German, English, Spanish, French, Romanian)",
        "Real-time push notifications via Firebase Cloud Messaging",
        "Dynamic QR badge generation with 30-second auto-refresh for security"
      ],

      techDetails: "Built with Flutter using a feature-first architecture and 75+ Cubits for granular state management via flutter_bloc. The app implements a clean layered architecture (UI → State Management → Repository → Data Sources) with GetIt and Injectable for dependency injection. Blockchain integration uses multiversx_sdk and multiversx_crypto for wallet operations, with XOXNO SDK for NFT marketplace functionality. Security is handled through flutter_secure_storage, AES-GCM encryption, and PBKDF2 key derivation. The app uses auto_route for type-safe navigation, dart_mappable for serialization, and implements platform-specific NFC handling for Android and iOS. Payment processing integrates the 'pay' package for native wallet support alongside WebView-based card payment flows.",

      challenges: "Key challenges included implementing non-custodial wallet security without compromising UX—solved by using Shamir's Secret Sharing to split seed phrases into encrypted shards. The QR/NFC dual check-in system required platform-specific implementations with Android's HCE/NFC-F reader mode and iOS's CoreNFC framework, coordinated through a unified BadgeScannerService. Ensuring offline functionality for blockchain-dependent features required building an intelligent caching layer with TTL-based invalidation and offline wallet generation fallbacks. Managing 75+ Cubits across the app was streamlined using a strict feature-first structure with shared repositories and services.",

      outcomes: "Delivered a production-ready cross-platform app targeting Android, iOS, Web, macOS, Windows, and Linux. The architecture enables seamless onboarding for non-crypto users while providing full Web3 capabilities for experienced users. The offline-first design ensures reliability in venue environments with poor connectivity. The modular codebase supports rapid feature iteration with clear separation of concerns."
    },
   {
      id: "firstock",
      title: "Firstock Trading App",
      img: "/projects/firstock_trading.webp",
      desc: "A full-featured stock trading and investment platform for the Indian market with real-time market data, portfolio management, and multi-asset trading capabilities.",
      playStore: "https://play.google.com/store/apps/details?id=in.firstock.mobile",
      appStore: "https://apps.apple.com/us/app/firstock-trade-invest/id6746480444",
      tags: ["Flutter", "Fintech", "Client", "Flutter Bloc", "WebSockets", "Trading", "Clean Architecture", "Firebase"],
      date: new Date("2024-01-10"),
      featured: true,
      longDesc: "Developed a comprehensive stock trading application for Firstock, a SEBI-registered stockbroker in India. The app enables users to trade across multiple asset classes including equities, futures & options, IPOs, and mutual funds. Features real-time market data streaming via WebSockets, advanced order types, portfolio analytics, and a full-featured options strategy builder. The app follows clean architecture principles with 123+ screens organized into feature modules, serving thousands of active traders.",
      features: [
        "Real-time market data streaming with live price updates and order book depth",
        "Multi-asset trading: Equities, F&O derivatives, IPO bidding, and Mutual Funds",
        "Advanced order types: Market, Limit, Stop-Loss, GTT (Good-Till-Triggered), and Basket orders",
        "Options strategy builder with multi-leg strategies and payoff analysis charts",
        "Comprehensive portfolio management with P&L tracking and holdings analysis",
        "Custom watchlists with market movers and stock screeners",
        "Interactive TradingView-style charts with technical analysis tools",
        "SIP (Systematic Investment Plans) for stocks and mutual funds",
        "Detailed reporting: Trade book, P&L statements, ledger, and dividend history",
        "Biometric authentication and TOTP-based two-factor authentication",
        "Push notifications for order updates, price alerts, and market news",
        "Fund management with multiple payment gateway integrations"
      ],
      techDetails: "Built with Flutter using feature-based clean architecture (Data/Domain/Presentation layers). State management via Flutter Bloc (Cubit pattern) with sealed classes for type-safe states. Real-time data handled through custom WebSocket service with heartbeat mechanism, binary exponential backoff reconnection (100ms to 128s), and automatic lifecycle management. Networking via Dio with custom AuthInterceptor for token injection and request queuing. Functional error handling using dartz Either pattern. Code generation with dart_mappable for JSON serialization, injectable for DI, and auto_route for type-safe navigation. Firebase integration for Analytics, Crashlytics, Remote Config (feature flags), and FCM notifications. Multi-flavor builds (dev/qa/staging/prod) with separate Firebase configurations. Request cancellation system with per-feature cancel tokens.",
      challenges: "Key challenges included implementing reliable real-time data streaming for volatile market conditions, managing complex state across 123+ screens with interdependent data, handling token refresh without interrupting active WebSocket connections, and ensuring consistent performance with high-frequency price updates. Solved WebSocket reliability through heartbeat monitoring and exponential backoff reconnection. Addressed state complexity using feature-scoped Cubits with shared mixins for common behaviors. Implemented queued interceptor pattern for seamless token refresh.",
      outcomes: "Successfully launched on both Play Store and App Store. The app handles real-time streaming for thousands of concurrent users during peak market hours. Clean architecture enabled rapid feature development with the team adding IPO bidding and Mutual Funds modules without disrupting existing trading functionality. Remote Config-based feature flags allow controlled rollouts of new features to user segments."
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