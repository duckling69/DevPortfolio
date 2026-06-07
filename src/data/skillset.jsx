import React from 'react';
import { Code2, Blocks, Server, Cpu } from 'lucide-react';

// Modern web3 + fullstack focused skills, directly from current resume.

export default [
  {
    title: "Languages",
    icon: <Code2 className="w-full h-full" />,
    tech: ["Solidity", "Rust (Anchor)", "TypeScript", "JavaScript", "Golang", "Python", "SQL", "C++"]
  },
  {
    title: "Blockchain & Smart Contracts",
    icon: <Blocks className="w-full h-full" />,
    tech: ["Solana (Anchor, PDAs, CPIs, SPL)", "EVM / Solidity", "Hardhat", "Foundry", "The Graph", "Chainlink (Oracles/Automation)", "Jupiter", "Circle", "Web3.js"]
  },
  {
    title: "Backend & Indexing",
    icon: <Server className="w-full h-full" />,
    tech: ["Node.js / Express", "Convex", "PostgreSQL", "MongoDB", "Event-driven pipelines", "Helius RPCs", "Real-time services", "REST & WebSockets"]
  },
  {
    title: "Frontend & Systems",
    icon: <Cpu className="w-full h-full" />,
    tech: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Docker", "Kubernetes", "AWS", "CI/CD"]
  }
];
