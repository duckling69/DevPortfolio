import React, { useEffect, useState } from 'react'
import About from './components/About';
import Footer from './components/Footer';
import Intro from './components/Intro'
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import './styles/App.css';

function App() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);
	return (
		<>
			<button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed z-10 left-2 top-2.5 bg-indigo-500 text-lg m-3 p-1 rounded-md"
			>
				{theme === 'dark' ? '🌙' : '🌞'}
			</button>
			<div className='font-mono bg-white dark:bg-slate-900 trans'>
				<div className='max-w-5xl mx-auto w-11/12'>
					<div>
						<Navbar></Navbar>
						<Intro />
						<Skills />
						<Project />
						<About />
						<Footer />
					</div>


				</div>


			</div>
		</>

	)
}

export default App