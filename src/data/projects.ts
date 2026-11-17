export interface Project {
  id: string;
  title: string;
  img: string;
  images?: string[]; // Additional images for gallery
  desc: string;
  tagline?: string; // One-line summary for the home page work index
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
        id: "shuttlepass",
        title: "ShuttlePass",
        img: "/projects/shuttlepass_cover.webp",
        images: ["/projects/shuttlepass.webp", "/projects/shuttlepass/desk.webp", "/projects/shuttlepass/auction.webp", "/projects/shuttlepass/umpire.webp"],
        tagline: "My own badminton platform on Flutter and Serverpod. A club runs its monthly auction league and live scoring on it",
        desc: "A badminton platform for clubs and players in India. Organisers run tournaments and auction leagues from their phone, umpires score rally by rally, and anyone can follow draws, courts, and auctions live. I'm building the whole product: Flutter app, Dart server, database, and landing site.",
        url: "https://shuttlepass.in",
        badge: "ACTIVE",
        tags: ["Flutter", "Flutter Web", "WASM", "Dart", "Serverpod", "PostgreSQL", "Flutter Bloc", "WebSockets", "Cloudflare", "Sports", "Personal"],
        date: new Date("2026-11-10"),
        featured: true,
        resumeHighlights: [
          "Own product, built solo on Flutter and Dart Serverpod with PostgreSQL; a club runs its monthly auction league on it",
          "First live league: 169 bids in a real-time auction, then 34 matches scored rally by rally by 3 umpires (1,454 points)",
          "Two-way WebSocket streams with snapshot-then-delta sync; row-locked bids and idempotent score events keep data correct",
        ],
        longDesc: "Badminton clubs in India still run tournaments on WhatsApp groups, paper draws, and spreadsheets, and auction leagues are run by someone shouting bids at a spreadsheet. ShuttlePass replaces all of that with one app. Each player has a permanent passport with their level, history, and stats, which stops people entering categories below their real level. Organisers set up tournaments, take entries with partner invites, generate draws, and run the day from a court desk that calls matches to courts. Umpires score each rally on their phone, and the public can watch draws, courts, and matches live without signing in. Auction leagues get a live auction room where team owners bid against a purse, followed by team ties, lineups, and a league table. I designed and built the whole product, from the database schema to the landing page.",
        features: [
          "Player passports with level, match history, stats, and a public profile page",
          "Eligibility rules: players can't enter below their highest level, and organiser overrides need a reason and go to an audit log",
          "Tournament setup, entries with partner invites, and draws as pools, knockout, or pools into knockout",
          "Court desk with a match queue that never calls a player to two courts at once",
          "Rally-by-rally umpire scoring with undo, configurable formats (21-point, 3×15, and more), and live score pages",
          "Live auction room with purse and max-bid checks on the server and timed lot changes",
          "Team leagues with lineups, ties, a league table, and a printable team sheet PDF",
          "Bulk player import from Excel, claim links for passports without an account, and co-organiser and umpire invites",
          "Public live pages for draws, courts, matches, and auctions, with no sign-in needed",
          "Email and Google sign-in on Serverpod auth with JWT sessions"
        ],
        techDetails: "The repo is a Dart pub workspace with four packages: the Flutter app, a Serverpod 4 server, the generated client, and a pure-Dart domain package that holds the score engine, draw generator, eligibility rules, court queue, bid rules, and permissions. The app and server both run that package, and the server has the final say. The app uses flutter_bloc (Cubits by default, Blocs with bloc_concurrency where event order matters), get_it and injectable, auto_route, and the Forui component library with a custom design system. Web compiles to Wasm and is served by the Serverpod server; Android builds an App Bundle. Data lives in PostgreSQL through the Serverpod ORM, with 300+ models and versioned migrations. Real-time features are Serverpod streaming endpoints over WebSocket: the auction, desk, scoring, and tie feeds are two-way command streams, and every stream sends a snapshot first and then versioned changes, so a client that misses one reloads the snapshot. Image uploads go to cloud storage, the landing site runs on a Cloudflare Worker, and the backend is deployed to Serverpod Cloud.",
        challenges: "Two team owners can bid on the same player within milliseconds of each other. Each bid locks the lot and the team rows in one transaction, so only one can win and a purse can never go negative. Live updates are published only after the transaction commits, so no screen ever shows a change that was rolled back. Scoring has the same problem on bad venue Wi-Fi: each rally is an append-only event with a client-generated id, so a retried tap counts once, and undo is just another event. Keeping rules identical on client and server was solved by putting them in one shared Dart package instead of writing them twice.",
        outcomes: "A local club now runs its monthly auction league on ShuttlePass. At the first edition in October 2026, four team owners bought 40 of 42 players in a live auction with 169 bids, and on match day three umpires scored all 34 matches rally by rally on their phones, 1,454 points in total, with every result confirmed in the app. The club has already set up its November edition. The web app and landing site are live, with an Android build on the way. 1,200+ commits in the first month, covered by 440+ test files, including integration tests for simultaneous bids and duplicate score events, and end-to-end flows that drive the real app against the real server."
      },

      {
        id: "vagus",
        title: "Vagus",
        img: "/projects/vagus.webp",
        images: ["/projects/vagus/01_session.webp", "/projects/vagus/02_setup.webp", "/projects/vagus/03_summary.webp", "/projects/vagus/04_sounds.webp", "/projects/vagus/05_session_hr.webp", "/projects/vagus/06_trends.webp", "/projects/vagus/07_sleep.webp", "/projects/vagus/08_home.webp", "/projects/vagus/09_reminders.webp"],
        tagline: "My own Bluetooth LE companion app: controls a wearable stimulation patch over its custom GATT protocol, with smartwatch heart-rate insight",
        desc: "A personal Android app that controls a wearable neurostimulation patch over Bluetooth LE. The official app kept failing and the vendor never answered support requests, so I mapped the custom GATT protocol of my own device and built a replacement with safe session control, background sessions, and heart-rate insight from my smartwatch through Health Connect.",
        badge: "PERSONAL USE",
        tags: ["Flutter", "Bluetooth LE", "Kotlin", "Health Connect", "Flutter Bloc", "Drift", "Android", "Wearables", "Health", "Personal"],
        date: new Date("2026-10-26"),
        featured: true,
        resumeHighlights: [
          "Flutter app controlling a BLE wearable over a custom GATT protocol I mapped from traffic logs, with auto-reconnect and background sessions",
          "Safety-first device control: write allowlist, intensity caps, one-step level changes, and firmware timers as a backstop if the app dies",
          "Health Connect integration through a custom Kotlin channel: reads smartwatch heart rate around each session and writes mindfulness records",
        ],
        longDesc: "I use a commercial wearable patch that delivers gentle electrical stimulation over Bluetooth LE. Its official app was unreliable, and the vendor never replied when I reported the problems, so I built my own. I worked out the device's GATT services and byte-level commands by capturing and analysing Bluetooth traffic from a device I own, verified each command on the hardware with a separate test harness app, and then built a full companion app around it. The app pairs with the patch, starts and controls sessions in four modes with 20 intensity levels, and keeps them running in the background. It then pulls heart rate and sleep data that my smartwatch syncs to Health Connect and shows how my body responded before, during, and after each session.",
        features: [
          "Scan, pair, and auto-connect to the patch at launch, with reconnect and exponential backoff when the link drops",
          "Session control across four modes, 20 intensity levels, a timer, and pause and resume",
          "Background sessions on an Android foreground service with a live, actionable session notification (Live Updates on Android 16)",
          "Battery level from voltage readings, with charging detected from the voltage trend because the device doesn't report it",
          "Heart rate before, during, and after each session from the smartwatch, via Health Connect",
          "Sleep and trend insights, plus a no-stimulation rest session as a baseline for comparison",
          "Session setup with duration, sound, and an optional before-and-after feeling check-in, plus a summary when a session ends",
          "Sound library of binaural tracks that download for offline use, plus imported sounds and a mini player",
          "Session history and favourites",
          "Daily reminders with exact alarms, quiet hours, and notification actions"
        ],
        techDetails: "Flutter for Android, with flutter_bloc Cubits, get_it and injectable, auto_route, and Drift (SQLite) for local storage. Bluetooth runs through universal_ble behind an abstract transport interface, so the session engine and repository are tested against a fake device. The protocol layer encodes the device's custom 128-bit UUIDs, mode and level commands, and a timer that is written big-endian but read back little-endian. The session engine sequences the start (level, then mode, then timer), allows only one-step level changes, polls the device to detect when it stops on its own, and drives a timed on/off cycle for one mode where each on-phase is a short firmware timer so it cannot outlive the app. Sessions run inside a connected-device foreground service. Health Connect uses the health package plus a custom Kotlin platform channel for what the package can't do: idempotent mindfulness writes, change tokens, data origins, and the permission contract. A WorkManager job re-queries heart rate until delayed watch data arrives. 70+ unit and widget test files, plus Patrol end-to-end tests that run on the real phone.",
        challenges: "This is a device that sends current through the skin, so safety came first: a write allowlist blocks any characteristic not explicitly approved, intensity is capped and always starts at level 1, and every pause, error, and lost connection sends explicit stop commands, with a firmware timer as a final backstop. The device allows one connection at a time and drops links, so connection state, adapter on/off, and reconnects are handled as streams. Charging isn't exposed over Bluetooth, so the app infers it from a sustained voltage rise over a 10-minute window of noisy readings. On the health side, I measured real watch behaviour on device (heart-rate samples about a minute apart, data arriving hours late until the watch app syncs) and designed the app around it with a waiting state, re-queries, and a notification when the data lands.",
        outcomes: "I use it daily in place of the official app. It connects reliably, keeps sessions running with the screen off, and shows how my heart rate responds to each session."
      },

      {
        id: "outfit-formulas",
        title: "Outfit Formulas",
        img: "/projects/outfit_formulas_cover.webp",
        tagline: "AI styling app with paying subscribers. Flutter app, Firebase backend, community, and AI features",
        desc: "A subscription-based outfit planning and personal styling app for iOS and Android, built around an AI stylist named ALI. I work across the whole stack: the Flutter app, the Firebase backend, the community feature I designed end to end, and AI features built on OpenAI.",
        url: "https://outfitformulas.com",
        playStore: "https://play.google.com/store/apps/details?id=com.outfit.mobile.app",
        appStore: "https://apps.apple.com/app/id6447664832",
        badge: "ACTIVE",
        tags: ["Flutter", "Flutter Bloc", "Firebase", "Cloud Functions", "TypeScript", "AI", "OpenAI", "Gemini", "Python", "FastAPI", "RevenueCat", "PostHog", "Client", "Consumer App"],
        date: new Date("2026-11-14"),
        featured: true,
        resumeHighlights: [
          "AI styling app; lead on the Flutter app and Firebase backend, and owner of the FastAPI AI backend since Oct 2026",
          "Architected community end to end: Firestore data model and rules, optimistic REST writes, flag-gated staged rollout",
          "Shipped AI features end to end: virtual try-on, trip-packing capsules, and validated OpenAI tagging in Cloud Functions",
          "Led a full V2 rewrite (Riverpod to BLoC, go_router to auto_route) without disrupting paying subscribers",
          "Led a security overhaul: audited all four repos, then shipped test-first least-privilege Firestore and Storage rules, custom-claim roles, and token-verified AI routes",
        ],
        longDesc: "Outfit Formulas is a wardrobe system app that helps women plan what to wear every day. The centerpiece is ALI, an AI stylist users can chat with using text, photos of their clothes, or voice input. Around that sit daily outfit formulas, a monthly outfit calendar, closet management tools, a 14-day style challenge, a closet cleanout assistant, packing lists, and a community with posts, polls, comments, and saved collections. The product runs on subscriptions with free trials, and growth comes from onboarding flows tested as experiments in PostHog. My role covers more than the mobile app. I own the Firebase backend (Firestore data model, security rules, indexes, and TypeScript Cloud Functions), I designed and built the community feature from the data contracts up, and I build AI features, from OpenAI-powered functions that tag and title outfits to the app side of ALI chat and planning. In October 2026 I also took over the FastAPI AI backend that runs ALI. Since then I've shipped See It On Me, an AI virtual try-on that shows an outfit on the user's own photo, and a trip packing feature that builds a capsule wardrobe from her own clothes and shop picks and exports a trip PDF. I also redesigned how outfits are planned on the calendar and moved the Home screen onto server-side recommendations. Alongside the consumer app, I work on an internal Flutter Web admin panel that the operations team uses to manage outfits, catalog items, content, and moderation, including PDF export of outfit plans.",
        features: [
          "ALI, an AI stylist chat with image uploads, voice input, outfit planning, and weather-aware replies",
          "See It On Me: AI virtual try-on that renders an outfit on the user's own photo, with history and day planning",
          "Trip packing: an AI-built capsule wardrobe from her own pieces and shop picks, editable per trip, exported as a PDF",
          "Personalized Home with daily outfit picks from server-side recommendations and a quick rating flow",
          "Seasonal splash and calendar moments scheduled from Remote Config, so they ship without an app release",
          "AI-generated closet titles and outfit tags from OpenAI, validated and scored server-side before they are saved",
          "Community with posts, polls, threaded comment replies, image and PDF posts, saved folders, and a Discover tab",
          "Community moderation flow: pending-review visibility, reporting, removed-post states, and banned-user handling",
          "Daily outfit formulas and a monthly outfit calendar with personal outfit recording and weekly planning",
          "Closet tools: wardrobe, wishlist, closet staples, cleanout assistant, and packing lists",
          "14-day style challenge and guided education content",
          "Subscription paywall with free trials, powered by RevenueCat and Stripe",
          "Multi-arm, experiment-driven onboarding measured with PostHog funnels",
          "Deep linking and attribution via Branch and universal links",
          "English and Spanish localization",
          "Least-privilege Firestore and Storage security rules with emulator tests in CI, and admin roles on Auth custom claims"
        ],
        techDetails: "The app is Flutter with a Cubit-only flutter_bloc architecture, get_it and injectable for dependency injection, auto_route with auth and subscription guards, and dart_mappable for serialization, with repositories returning Either-based results. The backend runs on Firebase (Auth, Firestore, Cloud Functions in TypeScript, Storage, Remote Config, Messaging) with dev and prod flavors, and I keep its rules, indexes, and function deploys in the repo as the source of truth. Community reads come straight from Firestore with cache-first, cursor-paginated queries, while every write goes through the REST backend, which handles AI moderation, counters, and ownership checks. A Firestore trigger fans out profile changes to denormalized author fields across posts and comments. The AI functions call OpenAI with versioned prompts, run items in parallel within the 120-second callable budget, and validate and score each result before writing it. ALI itself is a FastAPI service using LangGraph, OpenAI, and Gemini, deployed to AWS behind CloudFront. Payments run through RevenueCat with Stripe on the server side, and analytics spans PostHog, Firebase Analytics, and Braze. The admin panel is a separate Flutter Web app on Firebase Hosting with background-isolate PDF generation. Data contracts live in one schema source, and a code generator emits typed Dart, TypeScript, and Python models into each repo that reads or writes them. Newer AI work runs as streamed, tool-calling chat turns in Cloud Functions across Gemini and OpenAI-compatible providers, and image features such as try-on use Gemini and OpenAI image models.",
        challenges: "The largest single effort was the V2 rewrite: moving the app from Riverpod and go_router to Bloc and auto_route without disrupting active subscribers. Community was the biggest design job. I wrote the data contracts shared by the app, the AI backend, and the admin panel, then rolled the feature out in stages behind a PostHog flag with a scoring script that picked which users got access first. In late 2026 I led a security overhaul across the app, Firebase, and the AI backend. I audited all four repos, then rewrote the Firestore and Storage rules collection by collection as least-privilege owner rules, written test-first against the emulator and checked in CI. Admin and moderation roles moved to Firebase Auth custom claims set only by a server script, and the AI backend now takes the user's identity from the verified token instead of the request. Every change had to ship to a live app without locking existing users out of their data. Consolidating three outfit collections into one meant migrations and backfills on a live production database. On the AI side, model output is not reliable enough to save as-is, so the tagging and titling functions validate every result and flag anything unusual instead of writing bad data.",
        outcomes: "The app is live on both stores and in active development, with thousands of commits across the mobile app, Cloud Functions, and admin panel. Community reached every user through a staged rollout with a flag-based kill switch, and the AI tagging and titling functions are deployed to production. Shared contracts across the app, AI backend, and admin panel keep the whole product maintainable by a small team."
      },

      {
        id: "tacticx",
        title: "TacticX",
        img: "/projects/tacticx_cover.webp",
        images: ["/projects/tacticx.webp"],
        tagline: "Crypto options trading on Flutter Web compiled to WASM, holding 60fps on live market data",
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
        outcomes: "The platform was completed and held 60fps interactions even during volatile markets with heavy data streaming, thanks to the WASM compilation. The product itself is no longer running.",
        badge: "COMPLETED",
        tags: ["Flutter", "Flutter Web", "WASM", "Flutter Bloc", "Crypto", "Trading", "Fintech", "WebSockets", "Personal"],
        date: new Date("2025-01-11"),
        featured: true,
        resumeHighlights: [
          "Crypto options trading platform built with Flutter Web compiled to WASM, holding 60fps during heavy live market streaming",
          "Visual multi-leg strategy builder with payoff diagrams and position Greeks; isolate-based WebSocket parsing keeps the UI responsive",
        ]
      },
   {
      id: "zontix",
      title: "Zontix",
      img: "/projects/zontix_cover.webp",
      images: ["/projects/zontix.webp"],
      tagline: "NFT event ticketing with non-custodial wallets and QR/NFC check-in",
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
      img: "/projects/firstock_trading_cover.webp",
    images: ["/projects/firstock_trading.webp"],
      tagline: "Trading platform for a SEBI-registered broker, used by thousands of live traders",
      desc: "A stock trading and investment platform for the Indian market, with real-time market data, portfolio management, and trading across equities, F&O, IPOs, and mutual funds.",
      playStore: "https://play.google.com/store/apps/details?id=in.firstock.mobile",
      appStore: "https://apps.apple.com/us/app/firstock-trade-invest/id6746480444",
      tags: ["Flutter", "Fintech", "Client", "Flutter Bloc", "WebSockets", "Trading", "Clean Architecture", "Firebase"],
      date: new Date("2024-01-10"),
      featured: true,
      resumeHighlights: [
        "Full-featured stock trading platform for a SEBI-registered Indian broker: equities, F&O, IPOs, and mutual funds across 123+ screens",
        "Real-time WebSocket market data with heartbeat monitoring and exponential-backoff reconnection, serving thousands of concurrent traders at peak market hours",
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
    img: "/projects/indy_consumer_cover.webp",
    images: ["/projects/indy_consumer.webp"],
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
    img: "/projects/pragati_cover.webp",
    images: ["/projects/pragati.webp"],
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
    img: "/projects/mello_cover.webp",
    images: ["/projects/mello.webp"],
    tagline: "Reel-based event discovery app with a Node.js and MongoDB backend",
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
    img: "/projects/van_auto_cover.webp",
    images: ["/projects/van_auto.webp"],
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
    img: "/projects/rosette_cover.webp",
    images: ["/projects/rosette.webp"],
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
    img: "/projects/haqdarsahaq_cover.webp",
    images: ["/projects/haqdarsahaq.webp"],
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
    images: ["/projects/dota2/screen_1.webp", "/projects/dota2/screen_2.webp", "/projects/dota2/screen_3.webp", "/projects/dota2/screen_5.webp"],
    tagline: "Personal product with 10k+ downloads: 4,600+ sounds in 5 languages, rebuilt from scratch for 3.0",
    desc: "A fan-made soundboard app with 10k+ downloads that puts every Dota 2 sound in one place: 4,600+ sounds covering all 127 heroes, ability sounds, announcer packs, TI moments from 2017 to 2026, and a Guess the Hero quiz. Rebuilt from the ground up for 3.0 and now available in five languages.",
    playStore: "https://play.google.com/store/apps/details?id=com.shashankmayya.dota2soundboard",
    badge: "LIVE",
    tags: ["Flutter", "Flutter Bloc", "Drift", "Firebase", "Kotlin", "Localization", "Gaming", "Personal"],
    date: new Date("2026-09-19"),
    featured: true,
    resumeHighlights: [
      "Personal product with 10k+ downloads and 1.5k+ monthly active users; rebuilt from scratch for the 3.0 release",
      "Over-the-air content packs from a Cloudflare R2 CDN ship new sounds without store releases; full library re-encoded to Opus",
      "Set-as-ringtone, notification, and alarm feature written natively in Kotlin and bridged to Flutter over a method channel",
      "Localized into 5 languages, with translated sound titles shipped as over-the-air overlays and store screenshots captured by integration tests",
    ],
    longDesc: "Dota 2 Soundboard started as one of my first Flutter apps and has grown into a polished product with 10k+ downloads and 1.5k+ monthly active users. The 3.0 release was a complete rebuild: the original GetX and SQFlite codebase was rewritten with a layered Cubit architecture, a pre-bundled SQLite catalog powered by Drift, and an over-the-air content delivery system that ships new sound packs from a CDN without app updates. Since 3.0, two more releases added Russian, Latin American Spanish, Brazilian Portuguese, and Indonesian, with translated sound titles delivered over the air, plus new TI packs through 2026. The app covers 4,600+ sounds: chat-wheel voice lines for all 127 heroes, ability cast sounds, meme classics, announcer kill-streak calls, The International crowd, caster, and talent moments from 2017 to 2026, seasonal event packs, and pro-team chants.",
    features: [
      "Available in English, Russian, Spanish, Portuguese, and Indonesian, switchable in the app",
      "Sound library of 4,600+ sounds spanning all 127 heroes, ability sounds, announcer packs, TI moments, and seasonal events",
      "Over-the-air content packs delivered from a Cloudflare R2 CDN, so new sounds ship without app updates",
      "Guess the Hero quiz mode with rounds, stats, and score summaries",
      "Set any sound as a ringtone, notification, or alarm tone",
      "Share sounds as audio files with app attribution",
      "Favourites with most-played and recently-played shelves",
      "Radiant and Dire themes with edge-to-edge UI and entrance animations",
      "Wrong-sound reporting backed by Firestore with Play Integrity App Check",
      "Play Store in-app updates with configurable update priority"
    ],
    techDetails: "Built with Flutter using a feature-first layered architecture (Screen, Cubit, Repository, Service) with a Result-based error contract across the data layer. State management via flutter_bloc with sealed states and Equatable value equality. Dependency injection with get_it and injectable, navigation with auto_route, models with dart_mappable, and theming with theme_tailor. The sound catalog lives in a pre-bundled SQLite database accessed through Drift, while audio playback uses just_audio with the entire library re-encoded to Opus for smaller downloads. Content is served as hash-named OTA packs from a Cloudflare R2 CDN. The set-as-ringtone, notification, and alarm feature is implemented natively in Kotlin and bridged to Flutter over a method channel. Localization uses ARB files for the UI and per-language title overlays fetched from the CDN and merged into the catalog, falling back through a list of related languages when a translation is missing. Firebase provides Analytics (content sync, quiz, ringtone, and share funnels), Crashlytics, and Firestore, and monetization runs on a single adaptive AdMob banner. Store screenshots for every language are captured by an integration test and uploaded with fastlane.",
    challenges: "Migrating years of legacy user data (favourites from the original GetX version) without losing anything required a dedicated migration layer. Moving the sound library off the app bundle and onto a CDN meant designing a content sync pipeline with download progress, stale-catalog recovery, and graceful offline behavior. Re-encoding the full library to Opus cut download sizes significantly while keeping audio quality. After launch, users on weak connections could get stuck on the loading screen, so 3.0.1 put every CDN request under a single timeout.",
    outcomes: "The app maintains 1.5k+ monthly active users with more than 10k downloads. The OTA content system now lets new sound packs (TI 2022 to TI 2026, Crownfall) and translations ship without a store release, and the 3.0 rebuild turned a hobby project into a maintainable, production-grade codebase."
  },
  {
    id: "bridgeman",
    title: "The Bridgeman",
    img: "/projects/bridgeman_cover.webp",
    images: ["/projects/bridgeman.webp"],
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
    img: "/projects/hrdesigns_cover.webp",
    images: ["/projects/hrdesigns.webp"],
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