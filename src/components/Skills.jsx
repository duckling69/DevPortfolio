import React from 'react';
import SectionTile from './SectionTitle';
import skillset from '../data/skillset.jsx';
import SkillItem from './SkillItem';
import './styles/styles.css';


function Skills() {
  return (

    <div className='py-12' id='Skills'>
      <SectionTile>Skill Set</SectionTile>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {skillset.map(skills => (
         <SkillItem
         key={skills.title}
         title={skills.title}
         icon={skills.icon}
         tech={skills.tech}
         ></SkillItem>
        ))}
      </div>
    </div>
  )
}

export default Skills