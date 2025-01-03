import React from 'react'
import projects from '../data/projects.json'
import { Project } from './Project'

export const Projects = () => {
  return (
    <section className='section' id='projects'>
        <h2 className='section_title capitalize'>PROJECTS</h2>
        <div>
          <ul className='flex flex-row flex-wrap justify-center space-x-20'>
            {
              projects.map((project, id) => {
                return <Project key={id} project={project}/>
              })
            }
          </ul>
        </div>
    </section>
  )
};
