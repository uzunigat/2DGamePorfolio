import React from "react";
import { ProjectCard } from "./components/ProjectCard";
import { useTranslation } from "react-i18next";
import { CASTLE_RAIDER_TRANSLATIONS, FACEBOOK_DISTRIBUTED_TRANSLATIONS, MONSTERJA_LAND_TRANSLATIONS, PACMAN_TRANSLATIONS, TROMBI_UTC_TRANSLATIONS, UTCHAT_TRANSLATIONS } from "../../i18n";

export const Projects = () => {

    const { t } = useTranslation()
      
    return (
        <section className="my-6">
            <div>
            <h3 className='text-3xl py-1 mb-4 text-gray-500 text-center dark:text-white opacity-50'> Check out some of my projects </h3>
            </div>

            <div className="flex flex-wrap justify-center lg:grid lg:grid-cols-3 gap-10">
                <ProjectCard name={t(CASTLE_RAIDER_TRANSLATIONS.TITLE)} description={t(CASTLE_RAIDER_TRANSLATIONS.DESCRIPTION)} languages={['Game Maker Language']} imagePath="/assets/images/castle_riders.png"  projectUrl={t(CASTLE_RAIDER_TRANSLATIONS.GITHUB)}/>
                <ProjectCard name={t(PACMAN_TRANSLATIONS.TITLE)} description={t(PACMAN_TRANSLATIONS.DESCRIPTION)} languages={['C#']} imagePath="/assets/images/Pacman.png" projectUrl={t(PACMAN_TRANSLATIONS.GITHUB)}/>
                <ProjectCard name={t(MONSTERJA_LAND_TRANSLATIONS.TITLE)} description={t(MONSTERJA_LAND_TRANSLATIONS.DESCRIPTION)} languages={['JavaScript', 'React']} imagePath="/assets/images/monsterja_land.png" projectUrl={t(MONSTERJA_LAND_TRANSLATIONS.GITHUB)}/>
                <ProjectCard name={t(FACEBOOK_DISTRIBUTED_TRANSLATIONS.TITLE)} description={t(FACEBOOK_DISTRIBUTED_TRANSLATIONS.DESCRIPTION)} languages={['PHP', 'SQL']} imagePath="/assets/images/distributed-fb.png" projectUrl={t(FACEBOOK_DISTRIBUTED_TRANSLATIONS.GITHUB)}/>
                <ProjectCard name={t(UTCHAT_TRANSLATIONS.TITLE)} description={t(UTCHAT_TRANSLATIONS.DESCRIPTION)} languages={['Java']} imagePath="/assets/images/java-chat.png" projectUrl={t(UTCHAT_TRANSLATIONS.GITHUB)}/>
                <ProjectCard name={t(TROMBI_UTC_TRANSLATIONS.TITLE)} description={t(TROMBI_UTC_TRANSLATIONS.DESCRIPTION)} languages={['JavaScript', 'React', 'Node.js']} imagePath="/assets/images/trombi.png" projectUrl={t(TROMBI_UTC_TRANSLATIONS.GITHUB)}/>  
            </div>
        </section>
    )
}