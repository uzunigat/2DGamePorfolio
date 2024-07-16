import React from "react";
import { useTranslation } from "react-i18next";
import { InfoCard } from "./components";
import { AUDIBENE_CONSULTANT_TRANSLATIONS, AUDIBENE_TRANSLATIONS, EXPERIENCE_TRANSLATIONS, FAURECIA_TRANSLATIONS, SOLGANEO_TRANSLATIONS } from "../../i18n";

export const Experience = () => {
    const { t } = useTranslation()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-6xl mx-auto md:my-12">
            <div className="col-span-1 my-8 md:my-0 dark:text-white underline underline-offset-4 decoration-teal-500 text-xl md:text-lg sm:text-left text-center">{t(EXPERIENCE_TRANSLATIONS.TITLE)}</div>
            <div className="col-span-2">
                <InfoCard title={t(AUDIBENE_TRANSLATIONS.COMPANY)} position={t(AUDIBENE_TRANSLATIONS.POSITION)} duration={t(AUDIBENE_TRANSLATIONS.DURATION)} location={t(AUDIBENE_TRANSLATIONS.LOCATION)} description={t(AUDIBENE_TRANSLATIONS.DESCRIPTION)} />
                <InfoCard title={t(SOLGANEO_TRANSLATIONS.COMPANY)} position={t(SOLGANEO_TRANSLATIONS.POSITION)} duration={t(SOLGANEO_TRANSLATIONS.DURATION)} location={t(SOLGANEO_TRANSLATIONS.LOCATION)} description={t(SOLGANEO_TRANSLATIONS.DESCRIPTION)} />
                <InfoCard title={t(AUDIBENE_CONSULTANT_TRANSLATIONS.COMPANY)} position={t(AUDIBENE_CONSULTANT_TRANSLATIONS.POSITION)} duration={t(AUDIBENE_CONSULTANT_TRANSLATIONS.DURATION)} location={t(AUDIBENE_CONSULTANT_TRANSLATIONS.LOCATION)} description={t(AUDIBENE_CONSULTANT_TRANSLATIONS.DESCRIPTION)} />
                <InfoCard title={t(FAURECIA_TRANSLATIONS.COMPANY)} position={t(FAURECIA_TRANSLATIONS.POSITION)} duration={t(FAURECIA_TRANSLATIONS.DURATION)} location={t(FAURECIA_TRANSLATIONS.LOCATION)} description={t(FAURECIA_TRANSLATIONS.DESCRIPTION)} />
            </div>
        </div>
    )
}