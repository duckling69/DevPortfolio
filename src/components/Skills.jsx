import React from 'react';
import SectionTitle from './SectionTitle';
import skillset from '../data/skillset.jsx';
import SkillItem from './SkillItem';

function Skills() {
  return (
    <section id="skills" className="py-16 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <SectionTitle>Technical Skills</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          {skillset.map((cat, index) => (
            <SkillItem
              key={index}
              title={cat.title}
              icon={cat.icon}
              tech={cat.tech}
            />
          ))}
        </div>

        <p className="text-center mt-8 text-xs text-zinc-500 tracking-wide">
          Strong emphasis on production smart contract development, gas-efficient design, reliable off-chain infrastructure, and full dApp stacks.
        </p>
      </div>
    </section>
  );
}

export default Skills;