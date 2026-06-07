import React, { useEffect, useState } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import './styles/App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Default to dark (web3 standard). Respect system only on first load if no preference stored.
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme');
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
  }, []);

  const handleThemeSwitch = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-zinc-950 text-zinc-200' : 'bg-zinc-100 text-zinc-900'}`}>
        <div className="max-w-5xl mx-auto w-11/12">
          <Navbar onThemeToggle={handleThemeSwitch} theme={theme} />
          <Intro />
          <Experience />
          <Project />
          <Skills />
          <About />
          <Footer />
        </div>
      </div>

      {/* Subtle floating theme toggle */}
      <button
        type="button"
        onClick={handleThemeSwitch}
        aria-label="Toggle color theme"
        className={`fixed bottom-4 right-4 z-50 px-3 py-2 rounded-xl border text-xs tracking-wider transition flex items-center gap-2 ${
          theme === 'dark' 
            ? 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-200' 
            : 'border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-900'
        }`}
      >
        {theme === 'dark' ? '☼ Light' : '☾ Dark'}
      </button>
    </>
  );
}

export default App;