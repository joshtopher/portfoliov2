import React from 'react'


type ProjectProps = {
    project: {
        title: string;
        imageSrc: string;
        description: string;
        skills: string[];
        demo: string;
        source: string;
    };
};


export const Project: React.FC<ProjectProps> = ({ project }) => {
    const { title, imageSrc, description, skills, demo, source } = project;
    return (
        <div className='rounded-xl bg-dark-color w-72 h-96 relative mt-10'>
            <h3 className='pl-6 py-2 text-xl'>{title}</h3>
            <div className='flex justify-center h-1/3'>
                <img className='bg-background-color w-7/8 rounded-lg' src={imageSrc} alt={`${title} screenshot`} />
            </div>
            
            <p className='px-6 mt-2 h-1/5 line-clamp-3 text-project-card'>{description}</p>
            <ul className=' flex flex-row justify-between list-none px-4 w-72 flex-wrap'>
                {
                skills.map((skill: string, id: number) => {
                    return <li className='inline mt-2 px-1 rounded-md bg-secondary' key={id}>{skill}</li>
                    }   
                )}
            </ul>
            <div className='flex justify-around pb-2 absolute bottom-2 w-full'>
                {demo && <a className='project_url' href={demo} target='_blank' rel='noreferrer'>Demo</a>}
                {source && <a className='project_url' href={source} target='_blank' rel='noreferrer'>Source</a>}
            </div>
            
        </div>
    )
};
