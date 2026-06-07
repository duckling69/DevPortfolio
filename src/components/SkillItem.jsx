import React from 'react';

function SkillItem({ title, icon, tech }) {
  return (
    <div className="group bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500/30 transition-all">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 text-indigo-400">
          {icon}
        </div>
        <h3 className="font-semibold text-xl tracking-tight text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="inline-block px-3 py-1 text-sm rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 group-hover:border-zinc-700 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillItem;
