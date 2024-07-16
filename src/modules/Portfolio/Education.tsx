import React from "react"
import { useTranslation } from "react-i18next"
import { EDUCATION_TRANSLATIONS, IPN_TRANSLATIONS, UTC_TRANSLATIONS } from "../../i18n"
import { InfoCard } from "./components"

export const Education = () => {
    const { t } = useTranslation()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-6xl mx-auto md:my-12">
            <div className="col-span-1 my-8 md:my-0 dark:text-white underline underline-offset-4 decoration-teal-500 text-xl md:text-lg sm:text-left text-center">{t(EDUCATION_TRANSLATIONS.TITLE)}</div>
            <div className="col-span-2">
                <InfoCard title={t(UTC_TRANSLATIONS.SCHOOL_NAME)} position={t(UTC_TRANSLATIONS.DEGREE)} duration={t(UTC_TRANSLATIONS.DURATION)} location={t(UTC_TRANSLATIONS.LOCATION)} description={t(UTC_TRANSLATIONS.DESCRIPTION)} />
                <InfoCard title={t(IPN_TRANSLATIONS.SCHOOL_NAME)} position={t(IPN_TRANSLATIONS.DEGREE)} duration={t(IPN_TRANSLATIONS.DURATION)} location={t(IPN_TRANSLATIONS.LOCATION)} description={t(IPN_TRANSLATIONS.DESCRIPTION)} />
            </div>
        </div>
    )
}