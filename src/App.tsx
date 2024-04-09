import { BrowserRouter } from "react-router-dom"
import { Routes } from "./routes"
import React from "react"
import '../styles/globals.css'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}