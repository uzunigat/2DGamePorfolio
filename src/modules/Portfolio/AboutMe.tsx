import React, { useMemo } from "react";
import { Button } from "./components/Button";
import { useTranslation } from "react-i18next";
import { ABOUT_ME_TRANSLATIONS, CONTACT_DETAILS_TRANSLATIONS, PERSONAL_DATA_TRANSLATIONS } from "../../i18n";


export const AboutMe = () => {
    const { t } = useTranslation();
    const name = useMemo(() => `${t(PERSONAL_DATA_TRANSLATIONS.GIVEN_NAME)} ${t(PERSONAL_DATA_TRANSLATIONS.FAMILY_NAME)}`, [t]);
    const address = useMemo(() => `${t(CONTACT_DETAILS_TRANSLATIONS.CITY)}, ${t(CONTACT_DETAILS_TRANSLATIONS.COUNTRY)}`, [t]);

    return (
        <div className=''>
            <div>
                <h3 className='text-3xl py-1 mb-4 text-gray-500 text-center dark:text-white opacity-80'> {t(ABOUT_ME_TRANSLATIONS.TITLE)} </h3>
            </div>
            <div className='flex justify-center'>
                <p className='py-4 text-justify dark:text-white opacity-50 max-w-md'>{t(ABOUT_ME_TRANSLATIONS.DESCRIPTION)}</p>
            </div>

            <h4 className='text-2xl py-1 mb-4 text-gray-500 text-center dark:text-white opacity-80'> {t(CONTACT_DETAILS_TRANSLATIONS.TITLE)} </h4>
            <div className="flex md:mx-20">
                <div className="dark:text-white opacity-50 md:mx-20 mx-auto">
                    <p> {name} </p>
                    <p> {address} </p>
                    <p> {t(CONTACT_DETAILS_TRANSLATIONS.PHONE_NUMBER)} </p>
                </div>
                <Button className='md:mx-2 text-right h-12' text='Resume' onClick={() => window.open('')} showText={true}/>
            </div>
        </div>
    )
}