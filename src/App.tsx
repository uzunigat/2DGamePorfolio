import { BrowserRouter } from "react-router-dom"
import { Routes } from "./routes"
import React from "react"
import '../styles/globals.css'
import { initLocales, i18n } from "./i18n/i18n"
import { I18nextProvider } from "react-i18next"

initLocales()
export const App = () => {
    if (!i18n.language) return null
    return (
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
                <Routes />
            </I18nextProvider>
        </BrowserRouter>
    )
}