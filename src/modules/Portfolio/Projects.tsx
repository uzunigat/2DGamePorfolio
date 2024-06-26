import React from "react";
import { ProjectCard } from "./components/ProjectCard";

export const Projects = () => {
      
    return (
        <section className="my-6">
            <div>
            <h3 className='text-3xl py-1 mb-4 text-gray-500 text-center dark:text-white opacity-50'> Check out some of my projects </h3>
            </div>

            <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 gap-10">
                <ProjectCard name='Castle Raider' description='RPG Game created using Game Maker Studio' languages={['Game Maker Language']} imagePath="/assets/images/castle_riders.png" data-aos="fade-up"/>
                <ProjectCard name='Pacman' description="Classic Pacman game created using Unity" languages={['C#']} imagePath="/assets/images/Pacman.png" data-aos="fade-up"/>
                <ProjectCard name='Monsterja Land' description='Infinite Game using Unity' languages={['JavaScript', 'React']} imagePath="/assets/images/monsterja_land.png" data-aos="fade-up"/>
                <ProjectCard name='Facebook distributed' description="Distributed Facebook App that uses php and local DB's" languages={['PHP', 'SQL']} imagePath="/assets/images/distributed-fb.png" data-aos="fade-up"/>
                <ProjectCard name='UTChat' description='Chat Application using Java and JSP' languages={['Java']} imagePath="/assets/images/java-chat.png" data-aos="fade-up"/>
                <ProjectCard name="Trombi UTC" description="Web Application for the University of Technology of Compiègne" languages={['JavaScript', 'React', 'Node.js']} imagePath="/assets/images/trombi.png" data-aos="fade-up"/>  
            </div>
        </section>
    )
}