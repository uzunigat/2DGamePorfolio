import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PERSONAL_DATA_TRANSLATIONS, RESUME_TRANSLATIONS } from "../../../i18n";

export const Resume = () => {
    const { t } = useTranslation()
    const name = useMemo(() => `${t(PERSONAL_DATA_TRANSLATIONS.GIVEN_NAME)} ${t(PERSONAL_DATA_TRANSLATIONS.FAMILY_NAME)}`, [t])

    return(
        <div className='text-center p-10 '>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>{name}</h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>{t(PERSONAL_DATA_TRANSLATIONS.OCCUPATION)}</h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-xl dark:text-white opacity-50'>
          {t(RESUME_TRANSLATIONS.DESCRIPTION)}
        </p>
      </div>
    )
}