import React from 'react'
import SectionTitle from '../components/SectionTitle'

function About() {
  return (
    <div>
    <div className='w-full md:w-6/12'>
    <SectionTitle>About Me</SectionTitle>
    <p>
        
    </p>
    </div>
    <img src='../src/images/profile.png' alt="" className='w-6/12 lg:w-1/3 lg:h-1/3 rounded-full object-cover'/>
    </div>
  )
}

export default About