import React, {useState} from 'react'



type ProjectProps = {
    project: {
        title: string;
        imageSrc: string;
        description: string;
        skills: string[];
        expand: string;
        source: string;
    };
};


export const Project: React.FC<ProjectProps> = ({ project }) => {
    const { title, imageSrc, description, skills, expand, source } = project;
    const [inFocus, setInFocus] = useState(false);
    const handleMouseEnter = () => {
        setInFocus(true);
    };
    const handleMouseLeave = () => {
        setInFocus(false);
      };

    return (
        <li className={`z-20 rounded-xl bg-dark-color w-72 h-96 relative mt-10 transition-all duration-300 ease-in-out flex flex-col items-center ${inFocus && 'w-96 hover:h-7/8 gap-4'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <h3 className='py-2 text-xl'>{title}</h3>
            <div className='flex justify-center max-h-1/3'>
                <img className='bg-background-color rounded-lg max-w-7/8' src={imageSrc} alt={`${title} screenshot`} />
            </div>
                    
                <p className={`px-6 mt-2 max-h-1/5 line-clamp-3 text-project-card text-center ${inFocus && 'h-0.6 line-clamp-none'}`}>{description}</p>
                <ul className={`flex flex-row justify-between list-none px-4 max-w-7/8 flex-wrap self-center ${inFocus && 'absolute bottom-16'}`}>
                    {
                    skills.map((skill: string, id: number) => {
                        return <li className='inline mt-2 px-1 rounded-md bg-secondary' key={id}>{skill}</li>
                        }   
                    )}
                </ul>
                <div className='flex justify-around pb-2 absolute bottom-2 w-full'>
                    {expand && <a className='project_url' href={expand} target='_blank' rel='noreferrer'>Expand</a>}
                    {source && <a className='project_url' href={source} target='_blank' rel='noreferrer'>Source</a>}
                </div>
            
        </li>
    )
};
