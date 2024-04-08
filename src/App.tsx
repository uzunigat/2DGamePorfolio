import { BrowserRouter } from "react-router-dom"
import { Routes } from "./routes"
import React from "react"

export const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}