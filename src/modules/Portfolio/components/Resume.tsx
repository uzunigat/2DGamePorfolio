import { use } from "matter";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Translations } from "../../../i18n";

export const Resume = () => {
    const { t } = useTranslation()
    const name = useMemo(() => `${t(Translations.GIVEN_NAME)} ${t(Translations.FAMILY_NAME)}`, [t])

    return(
        <div className='text-center p-10 '>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>{name}</h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Fullstack Developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-xl dark:text-white opacity-50'>
          A Paris based Fullstack Engineer, currently employed by Audibene. Eager innovator and coding enthusiast on a quest to shape a brighter tech-driven future.
        </p>
      </div>
    )
}