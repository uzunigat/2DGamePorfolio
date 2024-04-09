import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const GITHUB_URL = 'https://github.com/uzunigat'
const LINKEDIN_URL = 'https://www.linkedin.com/in/rodrigo-zu%C3%B1iga-1121431b9/'

export const SocialIcons = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank')
  }
    return(
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
        <AiFillGithub onClick={() => openLink(GITHUB_URL)} className="transform transition duration-500 ease-in-out hover:scale-110"/>
        <AiFillLinkedin onClick={() => openLink(LINKEDIN_URL)} className="transform transition duration-500 ease-in-out hover:scale-110"/>
      </div>
    )
}