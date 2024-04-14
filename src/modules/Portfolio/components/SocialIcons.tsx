import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SOCIAL_TRANSLATIONS } from "../../../i18n";

export const SocialIcons = () => {
  const { t } = useTranslation()

  const openLink = (url: string) => {
    window.open(url, '_blank')
  }
  return(
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
        <AiFillGithub onClick={() => openLink(t(SOCIAL_TRANSLATIONS.GITHUB))} className="cursor-pointer transform transition duration-500 ease-in-out hover:scale-110"/>
        <AiFillLinkedin onClick={() => openLink(t(SOCIAL_TRANSLATIONS.LINKEDIN))} className="cursor-pointer transform transition duration-500 ease-in-out hover:scale-110"/>
      </div>
  )
}