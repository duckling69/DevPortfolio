import React from 'react'
import SectionTitle from '../components/SectionTitle'
import projects from '../data/projects'
import ProjectItem from './ProjectItem'

function Project() {
  return (
    <div>
      <SectionTitle id={projects}>Projects</SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
        {
          projects.map(project=>(
            <ProjectItem
            key={project.title}
              title={project.title}
              imageurl={project.imageurl}
              tech={project.tech}
            />
          ))
        }
      </div>
    </div>
    

  )
}

export default Project