import React from 'react'

type JobProps = {
    job: {
        role: string;
        company: string;
        startDate: string;
        endDate: string;
        bullets: string[];
        imageSrc: string;
    };
};

export const Job: React.FC<JobProps> = ({ job }) => {
    const { role, company, startDate, endDate, bullets, imageSrc } = job;
    return (
        <li className='border-l-2 flex flex-row items-center'>
            <img className='pl-4 w-24 h-24 py-2 ' src={imageSrc} alt={`${company} logo`} />
            <div className='pl-4'>
                <h3 className='text-xl font-semibold'>{`${role}, ${company}`}</h3>
                <p>{`${startDate} - ${endDate}`}</p>
                <ul className='pl-4'>{bullets.map((bullet: string, id: number) => {
                    return <li className='list-disc text-lg' key={id}>{bullet}</li>
                })}</ul>
            </div>
        </li>
    )
};
