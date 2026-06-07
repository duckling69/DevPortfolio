import React from 'react';

function SectionTitle({ children, id }) {
  return (
    <h2
      id={id}
      className="text-3xl md:text-4xl font-semibold tracking-tighter mb-2 text-zinc-100 dark:text-white"
    >
      {children}
    </h2>
  );
}

export default SectionTitle;