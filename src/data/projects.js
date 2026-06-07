// Curated projects for a strong fullstack web3 portfolio.
// Focused on depth (architecture, tests, optimizations) and impact.
// Primary sources: current resume + historical strong entries.

export default [
  {
    id: "exoticlsts",
    title: "Exoticlsts",
    tagline: "High-performance yield-harvesting protocol on Solana",
    description: "Developed a production-grade DeFi protocol using the Anchor Framework (Rust) featuring a multi-lock architecture for concurrent staking positions. Architected a custom price-volatility circuit breaker and threshold-based harvesting logic to protect against economic attacks and ensure protocol stability under volatile conditions.",
    highlights: [
      "Multi-lock PDA architecture enabling concurrent positions",
      "Custom price-volatility circuit breaker + threshold harvesting",
      "Comprehensive 27+ test suite in TypeScript covering complex CPIs",
      "100% reliability focus across cross-program invocations"
    ],
    tech: ["Rust", "Anchor", "Solana PDAs", "SPL Token", "TypeScript", "CPI", "DeFi Protocol Design"],
    github: "https://github.com/duckling69/stake_vault",
    live: null,
    category: "Solana / DeFi",
    featured: true
  },
  {
    id: "phantom-press",
    title: "Phantom Press",
    tagline: "Censorship-resistant decentralized news platform",
    description: "Built a decentralized news application leveraging IPFS for immutable, censorship-resistant storage and The Graph for efficient on-chain querying. Implemented secure content pinning, user authentication (Auth0), and won the hackathon track for privacy-preserving technology.",
    highlights: [
      "IPFS for decentralized, tamper-proof content storage & pinning",
      "The Graph subgraphs for fast querying of published articles",
      "Auth0 + secure user flows",
      "Privacy-preserving tech track winner"
    ],
    tech: ["Solidity", "React", "IPFS", "The Graph", "Auth0", "Tailwind"],
    github: "https://github.com/duckling69/PhantomPress",
    live: null,
    category: "EVM / dApp",
    featured: true
  },
  {
    id: "staker-fun",
    title: "Staker.fun Infrastructure",
    tagline: "Staking, rewards & analytics powering 50k+ users",
    description: "Core contributor to staking and reward distribution systems across Solana (Anchor) and EVM. Designed and implemented backend services handling reward calculations, user balances, and protocol analytics at scale.",
    highlights: [
      "1st Prize — Dublin Sidetrack (Solana Cypherpunk) with Superteam Ireland",
      "Anchor + Solidity hybrid staking logic",
      "High-scale backend for 50,000+ users"
    ],
    tech: ["Solana", "Anchor", "Solidity", "EVM", "TypeScript", "Backend"],
    github: "https://github.com/duckling69/stakerfun",
    live: null,
    category: "Solana + EVM",
    featured: false
  },
  {
    id: "bank-project",
    title: "Bank API (Golang)",
    tagline: "Production-grade banking backend with sqlc & migrations",
    description: "Robust REST API for a banking domain using Golang, PostgreSQL, sqlc for type-safe queries, and proper DB migrations inside Docker. Demonstrates strong backend fundamentals and clean architecture that transfers directly to reliable indexer and service development.",
    highlights: [
      "Type-safe database layer with sqlc",
      "Dockerized + migration-driven development",
      "Clean separation of concerns and REST design"
    ],
    tech: ["Golang", "PostgreSQL", "sqlc", "Docker", "REST API", "Migrations"],
    github: "https://github.com/duckling69/bank-project",
    live: null,
    category: "Backend Systems",
    featured: false
  }
];
