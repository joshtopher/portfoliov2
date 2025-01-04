import projects from '../data/projects.json'
import { Project } from './Project'

export const Projects = () => {
  return (
    <section className='section' id='projects'>
        <h2 className='section_title'>PROJECTS</h2>
        <div>
          <ul className='w-full h-120 flex justify-center flex-wrap gap-20 p-0 m-0 overflow-auto'>            {
              projects.map((project, id) => {
                return <Project key={id} project={project}/>
              })
            }
          </ul>
        </div>
    </section>
  )
};
