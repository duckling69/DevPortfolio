import React from 'react';
import myImg from '../images/image.png';
import SectionTitle from './SectionTitle';

function About() {
  return (
    <section id='About'>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
        <div className="w-full md:w-6/12">
          <SectionTitle>About Me</SectionTitle>
          <p className="text-md text-gray-600 dark:text-gray-300">
            Hi I'm Vivek a undergrad student at NIT Rourkela who loves to explore new technologies currently diving into world of open-source. I'm proficient with C/C++ , JavaScript, React, SQL, Bash and python. I'm currently exploring cloud native and DevOps and learning golang, CI/CD pipelines, docker, kubernetes. Always up for any kind of collaboration Feel free to connect on any of my social handles.

          </p>
          <a
            href="mailto:vivekjha3080@gmail.com"
            className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
          >
            vivekjha3080@gmail.com
          </a>
        </div>

        <img
          src={myImg}
          alt="Vivek"
          className="w-full md:w-6/12 rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}

export default About;