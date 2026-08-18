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
  resumeHighlights?: string[]; // Tight metric-led bullets pulled into the resume PDF
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
        id: "outfit-formulas",
        title: "Outfit Formulas",
        img: "/projects/outfit_formulas.webp",
        desc: "A subscription-based outfit planning and personal styling app for iOS and Android, built around an AI stylist named ALI. It includes closet tools, an outfit calendar, a community feed, and experiment-driven onboarding.",
        url: "https://outfitformulas.com",
        playStore: "https://play.google.com/store/apps/details?id=com.outfit.mobile.app",
        appStore: "https://apps.apple.com/app/id6447664832",
        badge: "ACTIVE",
        tags: ["Flutter", "Flutter Bloc", "Firebase", "AI", "RevenueCat", "PostHog", "Client", "Consumer App"],
        date: new Date("2026-08-10"),
        featured: true,
        resumeHighlights: [
          "AI-powered outfit planning app for iOS and Android, built around ALI, an AI stylist chat with text, photo, and voice input",
          "Led a full V2 rewrite from Riverpod/go_router to BLoC/auto_route on a live subscription app without disrupting paying subscribers",
          "Experiment-driven onboarding with frozen analytics contracts in PostHog; subscriptions via RevenueCat and Stripe",
          "Firebase Cloud Functions written in TypeScript, with unit and widget test suites covering core logic and UI",
        ],
        longDesc: "Outfit Formulas is a wardrobe system app that helps women plan what to wear every day. The centerpiece is ALI, an AI stylist users can chat with using text, photos of their clothes, or voice input. Around that sit daily outfit formulas, a monthly outfit calendar, closet management tools, a 14-day style challenge, a closet cleanout assistant, packing lists, and a community with posts, polls, and saved collections. The product runs on subscriptions with free trials, and growth comes from onboarding flows tested as experiments in PostHog. Alongside the consumer app, I work on an internal Flutter Web admin panel that the operations team uses to manage outfits, catalog items, content, and moderation, including PDF export of outfit plans.",
        features: [
          "ALI, an AI stylist chat with image uploads, voice input, and outfit suggestions",
          "Daily outfit formulas with weather-aware recommendations via location and forecast data",
          "Monthly outfit calendar with personal outfit recording and weekly planning flows",
          "Closet tools: wardrobe, wishlist, closet staples, cleanout assistant, and packing lists",
          "Community feed with posts, polls, comments, bookmarks, and moderation",
          "14-day style challenge and guided education content",
          "Subscription paywall with free trials, powered by RevenueCat and Stripe",
          "Multi-arm, experiment-driven onboarding measured with PostHog funnels",
          "Deep linking and attribution via Branch and universal links",
          "English and Spanish localization"
        ],
        techDetails: "Built with Flutter using a Cubit-only flutter_bloc architecture, get_it and injectable for dependency injection, auto_route with auth and subscription guards, and dart_mappable for serialization, with repositories returning Either-based results for functional error handling. Backend runs on Firebase (Auth, Firestore, Cloud Functions in TypeScript, Storage, Remote Config, Messaging) with dev and prod flavors, plus a custom AI backend behind CloudFront for chat, transcription, and personalization. Payments run through RevenueCat with Stripe on the server side. Analytics spans PostHog, Firebase Analytics, and Braze for lifecycle messaging. Shared functionality is split into local packages for authentication, payments, storage, and TikTok integration. The admin panel is a separate Flutter Web app on Firebase Hosting with background-isolate PDF generation.",
        challenges: "The largest effort was the full V2 rewrite: migrating the app from Riverpod and go_router to Bloc and auto_route without disrupting active subscribers. AI chat with image and voice input needed an upload and transcription pipeline that handles failures cleanly. Onboarding changes constantly, so flows are built as independent arms with frozen analytics contracts, which keeps PostHog funnels comparable across versions.",
        outcomes: "The app is live on both stores and in active development, with thousands of commits across the mobile app and admin panel. The onboarding experiment system lets the team test and ship new acquisition flows quickly, and sharing architecture between the consumer app and admin panel keeps the whole product maintainable by a small team."
      },

      {
        id: "tacticx",
        title: "TacticX",
        img: "/projects/tacticx.webp",
        desc: "A crypto options trading platform built with Flutter Web (WASM), with real-time market data, a visual strategy builder, and position analysis.",
        longDesc: "TacticX is a crypto options trading platform for derivatives traders. It runs as a Progressive Web App compiled to WASM, which keeps performance close to native: traders can analyze options chains, build multi-leg strategies visually, and monitor positions with real-time Greeks calculations. Market data streams from crypto exchanges through a unified WebSocket backend with sub-second latency.",
        features: [
          "Real-time options chain with live bid/ask spreads and open interest",
          "Visual strategy builder using node-based interface for multi-leg positions",
          "Interactive payoff diagrams with break-even analysis",
          "Position Greeks analysis (Delta, Gamma, Theta, Vega)",
          "WebSocket-powered live ticker updates with background isolate parsing",
          "Light/dark theme support with custom design system",
          "Session management with inactivity monitoring"
        ],
        techDetails: "Built with Flutter Web compiled to WASM. The architecture is a pragmatic 3-layer pattern (Screens → Cubits → Repositories → Services) with Flutter Bloc for state management, dart_mappable for JSON serialization, auto_route for type-safe navigation, and injectable/get_it for dependency injection. The WebSocket service uses reference-counted subscriptions with auto-reconnect and exponential backoff, and messages are parsed in Dart isolates so the UI stays responsive during high-frequency market updates.",
        challenges: "High-frequency WebSocket data would freeze the UI if parsed on the main thread, so message parsing runs in isolates. The visual strategy builder had to support arbitrary option leg combinations while keeping payoff calculations accurate. A custom theme extension system keeps styling consistent across web platforms.",
        outcomes: "The platform is production ready and holds 60fps interactions even during volatile markets with heavy data streaming, thanks to the WASM compilation.",
        badge: "IN DEVELOPMENT",
        tags: ["Flutter", "Flutter Web", "WASM", "Flutter Bloc", "Crypto", "Trading", "Fintech", "WebSockets", "Personal"],
        date: new Date("2025-01-11"),
        url:"https://tacticx.trade",
        featured: true,
        resumeHighlights: [
          "Crypto options trading platform built with Flutter Web compiled to WASM, holding 60fps during heavy live market streaming",
          "Visual multi-leg strategy builder with payoff diagrams and position Greeks; isolate-based WebSocket parsing keeps the UI responsive",
        ]
      },
   {
      id: "zontix",
      title: "Zontix",
      img: "/projects/zontix.webp",
      desc: "A cross-platform event management app that issues NFT tickets on the MultiversX blockchain, with non-custodial wallet management, QR and NFC check-ins, and built-in payments.",
      url: "https://zontix.com",
      tags: ["Flutter", "Fintech", "Client", "Flutter Bloc", "Crypto", "Event Management", "MultiversX", "NFT", "Firebase", "NFC"],
      date: new Date("2024-01-15"),
      featured: true,
      resumeHighlights: [
        "Blockchain event ticketing app on MultiversX: NFT tickets with Google Pay, Apple Pay, and card payments for mainstream users",
        "Non-custodial wallet security with BIP44 HD generation, AES-GCM encryption, and Shamir's Secret Sharing seed-phrase backup",
        "Dual QR/NFC check-in via Android HCE and iOS CoreNFC behind a unified scanner service, with offline-first caching for venues",
      ],

      longDesc: "Zontix is an event management and ticketing platform where organizers create, manage, and monetize events, and every ticket is an NFT on the MultiversX network. Attendees hold tamper-proof digital tickets in non-custodial wallets and check in with QR codes or NFC badges. Payments work through Google Pay, Apple Pay, and regular card payments, so people who have never touched crypto can still buy tickets.",

      features: [
        "NFT ticket issuance on MultiversX blockchain with XOXNO SDK integration",
        "Non-custodial wallet management with BIP44 HD wallet generation and Shamir's Secret Sharing for secure seed phrase backup",
        "Event check-in via QR code scanning or NFC badges (Android NFC Reader + iOS NFC/Peer modes)",
        "Event management dashboard with guest lists, team roles, referral programs, and voucher systems",
        "Payments via Google Pay, Apple Pay, and cards through the XMoneyPay gateway",
        "Firebase authentication with Google Sign-In and biometric (fingerprint/Face ID) security",
        "Offline-first design with caching, so the app keeps working when connectivity drops",
        "Multi-language support (German, English, Spanish, French, Romanian)",
        "Real-time push notifications via Firebase Cloud Messaging",
        "Dynamic QR badge generation with 30-second auto-refresh for security"
      ],

      techDetails: "Built with Flutter using a feature-first architecture and 75+ Cubits for granular state management via flutter_bloc. The app implements a clean layered architecture (UI → State Management → Repository → Data Sources) with GetIt and Injectable for dependency injection. Blockchain integration uses multiversx_sdk and multiversx_crypto for wallet operations, with XOXNO SDK for NFT marketplace functionality. Security is handled through flutter_secure_storage, AES-GCM encryption, and PBKDF2 key derivation. The app uses auto_route for type-safe navigation, dart_mappable for serialization, and implements platform-specific NFC handling for Android and iOS. Payment processing integrates the 'pay' package for native wallet support alongside WebView-based card payment flows.",

      challenges: "The hardest problem was non-custodial wallet security that doesn't punish the user: seed phrases are split into encrypted shards with Shamir's Secret Sharing, so there's a recovery path without a custodian. QR and NFC check-in needed separate platform implementations (Android's HCE/NFC-F reader mode, iOS's CoreNFC framework), coordinated through a unified BadgeScannerService. Blockchain-dependent features also had to work offline, which meant a caching layer with TTL-based invalidation and offline wallet generation fallbacks. The app's 75+ Cubits stay manageable through a strict feature-first structure with shared repositories and services.",

      outcomes: "The app ships from one codebase to Android, iOS, Web, macOS, Windows, and Linux. Non-crypto users can onboard without dealing with wallets or seed phrases, while experienced users get full Web3 access. The offline-first design holds up in venues with poor connectivity, and the modular codebase keeps feature work fast."
    },
   {
      id: "firstock",
      title: "Firstock Trading App",
      img: "/projects/firstock_trading.webp",
      desc: "A stock trading and investment platform for the Indian market, with real-time market data, portfolio management, and trading across equities, F&O, IPOs, and mutual funds.",
      playStore: "https://play.google.com/store/apps/details?id=in.firstock.mobile",
      appStore: "https://apps.apple.com/us/app/firstock-trade-invest/id6746480444",
      tags: ["Flutter", "Fintech", "Client", "Flutter Bloc", "WebSockets", "Trading", "Clean Architecture", "Firebase"],
      date: new Date("2024-01-10"),
      featured: true,
      resumeHighlights: [
        "Full-featured stock trading platform for a SEBI-registered Indian broker: equities, F&O, IPOs, and mutual funds across 123+ screens",
        "Real-time WebSocket market data with heartbeat monitoring and exponential-backoff reconnection, serving thousands of concurrent traders at peak market hours",
        "Clean architecture with Remote Config feature flags let IPO and Mutual Funds modules ship without disrupting live trading",
      ],
      longDesc: "A stock trading app for Firstock, a SEBI-registered stockbroker in India. Users trade equities, futures and options, IPOs, and mutual funds, with real-time market data over WebSockets, advanced order types, portfolio analytics, and an options strategy builder. The app follows clean architecture principles, with 123+ screens organized into feature modules, and serves thousands of active traders.",
      features: [
        "Real-time market data streaming with live price updates and order book depth",
        "Multi-asset trading: Equities, F&O derivatives, IPO bidding, and Mutual Funds",
        "Advanced order types: Market, Limit, Stop-Loss, GTT (Good-Till-Triggered), and Basket orders",
        "Options strategy builder with multi-leg strategies and payoff analysis charts",
        "Portfolio management with P&L tracking and holdings analysis",
        "Custom watchlists with market movers and stock screeners",
        "Interactive TradingView-style charts with technical analysis tools",
        "SIP (Systematic Investment Plans) for stocks and mutual funds",
        "Detailed reporting: Trade book, P&L statements, ledger, and dividend history",
        "Biometric authentication and TOTP-based two-factor authentication",
        "Push notifications for order updates, price alerts, and market news",
        "Fund management with multiple payment gateway integrations"
      ],
      techDetails: "Built with Flutter using feature-based clean architecture (Data/Domain/Presentation layers). State management via Flutter Bloc (Cubit pattern) with sealed classes for type-safe states. Real-time data handled through custom WebSocket service with heartbeat mechanism, binary exponential backoff reconnection (100ms to 128s), and automatic lifecycle management. Networking via Dio with custom AuthInterceptor for token injection and request queuing. Functional error handling using dartz Either pattern. Code generation with dart_mappable for JSON serialization, injectable for DI, and auto_route for type-safe navigation. Firebase integration for Analytics, Crashlytics, Remote Config (feature flags), and FCM notifications. Multi-flavor builds (dev/qa/staging/prod) with separate Firebase configurations. Request cancellation system with per-feature cancel tokens.",
      challenges: "Real-time streaming had to stay reliable through volatile market conditions and high-frequency price updates; heartbeat monitoring and exponential backoff reconnection handle the drops. State across 123+ screens with interdependent data is managed with feature-scoped Cubits and shared mixins for common behaviors. Token refresh runs through a queued interceptor so active WebSocket connections and in-flight requests are not interrupted.",
      outcomes: "Launched on both the Play Store and App Store. The app streams real-time data to thousands of concurrent users during peak market hours. The clean architecture let the team add the IPO bidding and Mutual Funds modules without disrupting live trading, and Remote Config feature flags control rollouts to user segments."
    },
  {
    id: "indy",
    title: "Indy App",
    img: "/projects/indy_consumer.webp",
    desc: "A fintech app built in Flutter for a client, including UPI payments and a wallet.",
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
    desc: "A Flutter tablet ERP app for a jewellery client, used for billing and inventory management. In production and maintained by me.",
    badge: "MAINTENANCE",
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
    desc: "A reel-based event discovery app for the Bangalore audience. I built the Flutter app with a Node.js and MongoDB backend, Mixpanel for analytics, and CleverTap for push notifications.",
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
    desc: "A CRM web application for Auto Finance Canada, built with Flutter Web and backed by Supabase, used to run their automotive financing operations.",
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
    desc: "A health monitoring app for a client, built for patient care and data management, with smart data syncing and local storage on Isar.",
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
    desc: "A responsive Flutter Web app for Haqdarshaq that lets their customers manage wallets and cards.",
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
    title: "Dota 2 Soundboard",
    img: "/projects/dota2sounboard.webp",
    desc: "A fan-made soundboard app with 10k+ downloads that puts every Dota 2 sound in one place: voice lines for 120+ heroes, ability sounds, announcer packs, TI crowd moments, and a Guess the Hero quiz. Rebuilt from the ground up for its 3.0 release.",
    playStore: "https://play.google.com/store/apps/details?id=com.shashankmayya.dota2soundboard",
    badge: "3.0 RELEASE",
    tags: ["Flutter", "Flutter Bloc", "Drift", "Firebase", "Gaming", "Personal"],
    date: new Date("2026-08-09"),
    featured: true,
    resumeHighlights: [
      "Personal product with 10k+ downloads and 1.5k+ monthly active users; rebuilt from scratch for the 3.0 release",
      "Over-the-air content packs from a Cloudflare R2 CDN ship new sounds without store releases; full library re-encoded to Opus",
      "Set-as-ringtone, notification, and alarm feature written natively in Kotlin and bridged to Flutter over a method channel",
    ],
    longDesc: "Dota 2 Soundboard started as one of my first Flutter apps and has grown into a polished product with 10k+ downloads and 1.5k+ monthly active users. The 3.0 release was a complete rebuild: the original GetX and SQFlite codebase was rewritten with a layered Cubit architecture, a pre-bundled SQLite catalog powered by Drift, and an over-the-air content delivery system that ships new sound packs from a CDN without app updates. The app covers chat-wheel voice lines for 120+ heroes, ability cast sounds, meme classics, announcer kill-streak calls, The International crowd and caster moments from 2017 to 2023, seasonal event packs, and pro-team chants.",
    features: [
      "Sound library spanning 120+ heroes, ability sounds, announcer packs, TI moments, and seasonal events",
      "Over-the-air content packs delivered from a Cloudflare R2 CDN, so new sounds ship without app updates",
      "Guess the Hero quiz mode with rounds, stats, and score summaries",
      "Set any sound as a ringtone, notification, or alarm tone",
      "Share sounds as audio files with app attribution",
      "Favourites with most-played and recently-played shelves",
      "Radiant and Dire themes with edge-to-edge UI and entrance animations",
      "Wrong-sound reporting backed by Firestore with Play Integrity App Check",
      "Play Store in-app updates with configurable update priority"
    ],
    techDetails: "Built with Flutter using a feature-first layered architecture (Screen, Cubit, Repository, Service) with a Result-based error contract across the data layer. State management via flutter_bloc with sealed states and Equatable value equality. Dependency injection with get_it and injectable, navigation with auto_route, models with dart_mappable, and theming with theme_tailor. The sound catalog lives in a pre-bundled SQLite database accessed through Drift, while audio playback uses just_audio with the entire library re-encoded to Opus for smaller downloads. Content is served as hash-named OTA packs from a Cloudflare R2 CDN. The set-as-ringtone, notification, and alarm feature is implemented natively in Kotlin and bridged to Flutter over a method channel. Firebase provides Analytics, Crashlytics, and Firestore, and monetization runs on a single adaptive AdMob banner.",
    challenges: "Migrating years of legacy user data (favourites from the original GetX version) without losing anything required a dedicated migration layer. Moving the sound library off the app bundle and onto a CDN meant designing a content sync pipeline with download progress, stale-catalog recovery, and graceful offline behavior. Re-encoding the full library to Opus cut download sizes significantly while keeping audio quality.",
    outcomes: "The app maintains 1.5k+ monthly active users with more than 10k downloads. The OTA content system now lets new sound packs (TI 2022, TI 2023, Crownfall) ship without a store release, and the 3.0 rebuild turned a hobby project into a maintainable, production-grade codebase."
  },
  {
    id: "bridgeman",
    title: "The Bridgeman",
    img: "/projects/bridgeman.webp",
    desc: "A contact website for The Bridgeman, built with Flutter Web.",
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
    desc: "A website for HR Designs, built with Bootstrap and HTML/CSS.",
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