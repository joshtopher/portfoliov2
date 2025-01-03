import React from 'react'
import experience from '../data/history.json'
import { Job } from './Job'



export const Experience = () => {
  return (
    <section className='section' id='experience'>
        <h2 className='section_title capitalize'>EXPERIENCE</h2>

        <div className='pt-10'>
            <ul className=' flex flex-col space-y-10'>
                {
                    experience.map((job, id) => {
                      return <Job key={id} job={job}/>
                    })
                }
            </ul>
        </div>

    </section>
  )
};
