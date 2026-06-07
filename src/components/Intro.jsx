import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Intro() {
  const stats = [
    { label: "1st Prize", value: "Solana Cypherpunk" },
    { label: "Infra", value: "50k+ users" },
    { label: "DAO", value: "$20M ATH" },
    { label: "Optimization", value: "73% cost ↓" },
  ];

  const scrollToExperience = () => {
    const el = document.getElementById('experience');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="pt-12 pb-20 md:pt-20 md:pb-24">
      <div className="flex flex-col items-start max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs tracking-[2px] text-zinc-400 mb-6">
          NEW DELHI, INDIA • AVAILABLE FOR FULL-TIME / CONTRACT WEB3 ROLES
        </div>

        <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter text-white leading-none mb-4">
          Vivek Jha
        </h1>

        <div className="text-2xl md:text-3xl font-medium tracking-tight text-indigo-400 mb-6">
          Software Engineer — Blockchain &amp; AI
        </div>

        <p className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
          Full-stack engineer building production-grade on-chain systems. 
          I ship secure Solana (Anchor) and EVM smart contracts, custom TypeScript SDKs, 
          real-time indexers, and scalable backends. Previously founding engineer at a $20M DAO and core contributor at Staker.fun.
        </p>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
              <div className="text-xs uppercase tracking-widest text-zinc-500">{stat.label}</div>
              <div className="text-lg font-semibold text-white mt-0.5">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={scrollToExperience}
            className="group inline-flex items-center justify-center gap-2 px-7 h-12 rounded-xl bg-white text-zinc-950 font-medium hover:bg-zinc-200 active:scale-[0.985] transition-all"
          >
            View Experience
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
          </button>

          <a
            href="https://github.com/duckling69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 h-12 rounded-xl border border-zinc-700 hover:border-zinc-500 text-white font-medium transition-colors"
          >
            <FaGithub className="w-4 h-4" /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vivek-jha-17000918b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 h-12 rounded-xl border border-zinc-700 hover:border-zinc-500 text-white font-medium transition-colors"
          >
            <FaLinkedin className="w-4 h-4" /> LinkedIn
          </a>

          <a
            href="https://x.com/0xjuniordev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 h-12 rounded-xl border border-zinc-700 hover:border-zinc-500 text-white font-medium transition-colors"
          >
            <FaTwitter className="w-4 h-4" /> X
          </a>

          <a
            href="mailto:vivekjha3080@gmail.com?subject=Opportunity%20for%20Vivek%20Jha"
            className="inline-flex items-center gap-2 px-5 h-12 rounded-xl border border-zinc-700 hover:border-zinc-500 text-white font-medium transition-colors"
          >
            <Mail className="w-4 h-4" /> Email
          </a>

          <a
            href="https://www.linkedin.com/in/vivek-jha-17000918b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 h-12 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-medium transition-colors"
          >
            Resume on LinkedIn
          </a>
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          Also on <a href="https://x.com/0xjuniordev" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400">X (@0xjuniordev)</a> • <a href="https://leetcode.com/vivekjha3080" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400">LeetCode</a> • <a href="https://www.codechef.com/users/shanks69" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-400">CodeChef (3★)</a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
