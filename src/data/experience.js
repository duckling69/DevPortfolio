// Latest professional experience tailored for fullstack web3 / blockchain engineering roles.
// Data derived directly from current resume.

export default [
  {
    company: "Crshmarket (formerly KupidTV)",
    companyUrl: "https://www.linkedin.com/company/crshmarket/",
    role: "Software Engineer",
    period: "Jan 2026 — May 2026",
    location: "Remote",
    highlights: [
      "Architected and deployed the complete **real-time backend oracle** and indexing layer for a high-frequency **livestream prediction market** (60s settlements) using **Convex** and **TypeScript**, enabling sub-second state sync and WebSocket broadcasts across dynamic LMSR-priced markets.",
      "Designed and implemented a production **TypeScript SDK** (PredictionMarketManager + LMSR math helpers, PDA derivation, resolution tickets) that unified complex on-chain interactions, reducing frontend integration time by **40%**.",
      "Engineered a **stateless on-chain design** combined with off-chain event-sourced resolution model (mathematical pool/payout accounting + PDA rent recovery); refactored state to lightweight event logging, cutting operational costs by **73%**.",
      "Owned end-to-end: **Anchor/Rust** smart contract (LMSR pricing, custom math, 27+ tests, events), Express + Convex backend (oracle signing, indexing, real-time WS), SDK, scripts, and devnet deployments."
    ],
    tech: ["Solana", "Anchor (Rust)", "TypeScript SDK", "Convex", "LMSR", "Prediction Markets", "WebSocket", "Real-time Indexing", "Event Sourcing"]
  },
  {
    company: "YieldOS",
    companyUrl: "https://www.linkedin.com/company/yieldos/",
    role: "Software Engineer — Blockchain & AI",
    period: "Sep 2025 — Dec 2025",
    location: "Remote",
    highlights: [
      "Built yield-focused smart contracts and backend systems for tracking on-chain positions using Solidity and EVM primitives.",
      "Implemented event-driven indexing pipelines to sync on-chain data with off-chain databases using TypeScript and MongoDB.",
      "Focused on gas-efficient contract design and production-ready backend reliability for high-frequency user interactions."
    ],
    tech: ["Solidity", "EVM", "TypeScript", "MongoDB", "Event Indexing", "Hardhat", "Gas Optimization"]
  },
  {
    company: "Staker.fun",
    companyUrl: "https://www.linkedin.com/company/stakerdotfun/",
    role: "Software Engineer",
    period: "July 2025 — Dec 2025",
    location: "Remote",
    highlights: [
      "Secured 1st Prize at the Dublin Sidetrack (Solana Cypherpunk hackathon), collaborating directly with Superteam Ireland members.",
      "Developed staking and reward distribution logic using the Solana Anchor Framework (Rust) and Solidity for EVM chains.",
      "Built backend services for reward calculation, user balances, and protocol analytics, contributing to infrastructure supporting 50,000+ users."
    ],
    tech: ["Solana", "Anchor", "Solidity", "EVM", "TypeScript", "Backend Systems", "Analytics"]
  },
  {
    company: "Nasdao AI",
    companyUrl: null,
    role: "Founding Engineer",
    period: "Oct 2024 — May 2025",
    location: "Remote",
    highlights: [
      "Built the initial smart contracts and infrastructure for a DAO project that grew to 20,000+ members and a $20M ATH valuation.",
      "Created an autonomous agent using Python and LLMs to manage community engagement and execute social media tasks for Sakura AI."
    ],
    tech: ["Solidity", "Smart Contracts", "Python", "LLMs", "Autonomous Agents", "DAO Infrastructure"]
  },
  {
    company: "Layer5",
    companyUrl: "https://layer5.io/",
    role: "Software Developer Intern",
    period: "June 2023 — August 2023",
    location: "Remote",
    highlights: [
      "Contributed heavily to Meshery-cloud (the largest project in the CNCF landscape) using React, Golang, Cypress, Docker, GraphQL, and CI/CD pipelines.",
      "Resolved 30+ production issues, upheld high codebase standards as a repository maintainer, and helped promote the project—driving 100+ new GitHub stargazers.",
      "Collaborated daily with distributed teams on a large-scale open-source cloud native platform, gaining deep experience in complex distributed systems."
    ],
    tech: ["React", "Golang", "Cypress", "Docker", "GraphQL", "CI/CD", "Kubernetes", "Open Source"]
  },
  {
    company: "Meshery (CNCF)",
    companyUrl: "https://meshery.io/",
    role: "Open Source Developer",
    period: "May 2023 — June 2023",
    location: "Remote",
    highlights: [
      "Resolved 30+ GitHub issues and reviewed 10+ pull requests across the Meshery codebase using React, Go, CI/CD workflows, and rigorous testing practices.",
      "Served as a maintainer, ensuring code quality, stability, and best practices for a major Cloud Native Computing Foundation project."
    ],
    tech: ["React", "Golang", "CI/CD", "Testing Frameworks", "Open Source", "Code Review"]
  }
];
