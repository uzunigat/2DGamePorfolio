import React, { useMemo } from "react";

type EducationCardProps = {
    title: string;
    position: string;
    duration: string;
    location: string;
    description: string;
}

export const InfoCard = ({title, position, duration, location, description}: EducationCardProps) => {
    const subtitle = useMemo(() => {
        return `${position} | ${duration}`
    }, [position, duration])

    return (
        <div className="mb-4">
            <div className='dark:text-white'>
                <h3 className='white:underline-offset-4 decoration-teal-500 dark:text-teal-500 text-2xl font-medium'>{title}</h3>
                <p className='opacity-40'>{subtitle}</p>
                <p className='opacity-30 py-2'>{location}</p>
                <p className='opacity-70 py-2 text-justify'>{description}</p>
            </div>
        </div>
    )
}