import React from 'react';
import './styles/styles.css';
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <section id='home'>
    <div className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
            <h1 className='trans text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500'>Hi, This is <span>
<Typewriter className='overflow-hidden'
            options={{
              autoStart:true,
              loop:true,
              delay:600,
              strings:[
                "Vivek !!!"
              ]
            }}
               
            
            /></span></h1>
            <p className='trans text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>Fresher at NIT Rourkela, DEV and Programming enthusiast.</p>
            <div className='flex flex-row justify-center'>
              <a href='#' className='hover:trans inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-indigo-600 hover:border-indigo-600 md:text-md'>Resume</a>
              <a href='#' className='hover:trans inline-block px-8 mx-2 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 border-indigo-600 bg-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600 md:text-md'>Lets talk</a>
            </div>
        </div>
    </div>
    </section> 
  )
}

export default Intro