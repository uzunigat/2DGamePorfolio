import React from "react";
import { ProjectCard } from "./components/ProjectCard";

export const Projects = () => {
    return (
        <section className="my-6">
            <div>
            <h3 className='text-3xl py-1 mb-4 text-gray-500 text-center dark:text-white opacity-50'> Check out some of my projects </h3>
            </div>

            <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 gap-10">
                <ProjectCard name='Castle Raider' description='RPG Game created using Game Maker Studio' languages={['Game Maker Language']} imagePath="/public/assets/images/castle_riders.png"/>
                <ProjectCard name='Pacman' description="Classic Pacman game created using Unity" languages={['C#']} imagePath="/public/assets/images/Pacman.png"/>
                <ProjectCard name='Monsterja Land' description='Infinite Game using Unity' languages={['JavaScript', 'React']} imagePath="/public/assets/images/monsterja_land.png"/>
                <ProjectCard name='Facebook distributed' description="Distributed Facebook App that uses php and local DB's" languages={['PHP', 'SQL']} imagePath="/public/assets/images/distributed-fb.png"/>
                <ProjectCard name='UTChat' description='Chat Application using Java and JSP' languages={['Java']} imagePath="/public/assets/images/java-chat.png"/>
                <ProjectCard name="Trombi UTC" description="Web Application for the University of Technology of Compiègne" languages={['JavaScript', 'React', 'Node.js']} imagePath="/public/assets/images/trombi.png" />  
            </div>
        </section>
    )
}