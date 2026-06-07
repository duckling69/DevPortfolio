import React from 'react';
import myImg from '../images/image.png';
import SectionTitle from './SectionTitle';
import { Award, GraduationCap } from 'lucide-react';

const education = {
  school: "National Institute of Technology, Rourkela",
  degree: "Integrated M.Sc. in Mathematics",
  period: "Dec 2021 — June 2026",
  location: "Rourkela, India",
  gpa: "CGPA: 7.36"
};

const honors = [
  "1st Prize — Dublin Sidetrack (Solana Cypherpunk) with Superteam Ireland",
  "Best Sustainability Hack — MLH Hacky New Year",
  "Best Use of Auth0 — HackNITR 4.0",
  "Best Use of Appwrite — MLH Design-A-Thon",
  "CodeChef 3★ (Max Rating 1635) • 100+ LeetCode problems"
];

function About() {
  return (
    <section id="about" className="py-16 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-x-12 gap-y-10 items-start">
          {/* Bio + Photo */}
          <div className="md:col-span-3">
            <SectionTitle>About</SectionTitle>

            <div className="prose prose-invert text-zinc-300 max-w-none text-[15px] leading-relaxed">
              <p>
                Full-stack engineer specializing in decentralized applications and AI-augmented systems. 
                I design and ship secure, production smart contracts (Solana Anchor + EVM), build custom SDKs and 
                event-driven indexers, and deliver reliable user-facing applications.
              </p>
              <p>
                My mathematics background from NIT Rourkela gives me a rigorous foundation for protocol economics, 
                security modeling, and complex on-chain state design. Previously a founding engineer at a DAO that 
                reached a $20M ATH valuation, and core contributor to infrastructure serving tens of thousands of users.
              </p>
              <p>
                4× hackathon track winner. Always happy to collaborate on ambitious web3 products.
              </p>
            </div>

            <a
              href="mailto:vivekjha3080@gmail.com"
              className="inline-block mt-5 text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
            >
              vivekjha3080@gmail.com
            </a>
          </div>

          {/* Photo */}
          <div className="md:col-span-2">
            <img
              src={myImg}
              alt="Vivek Jha"
              className="w-full rounded-2xl border border-zinc-800 object-cover aspect-[4/3] md:aspect-auto md:h-full"
            />
          </div>

          {/* Education */}
          <div className="md:col-span-2 pt-2">
            <div className="flex items-center gap-2 mb-3 text-indigo-400">
              <GraduationCap className="w-5 h-5" />
              <span className="uppercase tracking-widest text-xs font-medium">Education</span>
            </div>
            <div className="border-l-2 border-zinc-800 pl-4 text-sm">
              <div className="font-semibold text-white text-base">{education.school}</div>
              <div>{education.degree}</div>
              <div className="text-zinc-400 mt-0.5">{education.period} • {education.location}</div>
              <div className="text-zinc-400">{education.gpa}</div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-3 text-indigo-400">
              <Award className="w-5 h-5" />
              <span className="uppercase tracking-widest text-xs font-medium">Honors &amp; Awards</span>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-zinc-300">
              {honors.map((h, i) => (
                <li key={i} className="flex gap-2 leading-snug">
                  <span className="text-indigo-500 mt-1">•</span> {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;