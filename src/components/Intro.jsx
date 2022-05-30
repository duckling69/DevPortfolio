import React from 'react';
import './styles/styles.css';
function Intro() {
  return (
    <div className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
            <h1 className='trans text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500'>Hi, This is <br className="block md:hidden" />
  <span className="relative">
    <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
    Vivek !!
    </span>
    <span
      className="trans {`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-white dark:bg-slate-900 w-full animate-type will-change`}"
    ></span>
  </span></h1>
            <p className='trans text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300'>Fresher at NIT Rourkela, DEV and Programming enthusiast.</p>
            <div className='flex flex-row justify-center'>
              <a href='#' className='hover:trans inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-indigo-600 hover:border-indigo-600 md:text-md'>Resume</a>
              <a href='#' className='hover:trans inline-block px-8 mx-2 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 border-indigo-600 bg-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600 md:text-md'>Lets talk</a>
            </div>
        </div>
    </div>
    
  )
}

export default Intro