import React from "react";

type ProjectCardProps = {
    name: string;
    description: string;
    languages: string[];
    imagePath: string;
}

export const ProjectCard = ({ name, description, languages, imagePath }: ProjectCardProps) => {
    return (
            
        <div className='text-center shadow-lg p-10 rounded-xl my-2 w-100 dark:bg-white transform transition duration-500 ease-in-out hover:scale-105 sm:w-auto'>
            <img className='mx-auto rounded-lg w-64 h-40' src={imagePath} alt='design'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>{name}</h3>
            <p className='py-2 max-w-40 mx-auto'>{description}</p>
            <h4 className='py-4 text-teal-600'>Languages</h4>
            {languages.map((language, index) => (
                <p key={index} className='text-gray-800 py-1'>{language}</p>
            ))}
        </div>
    )
}