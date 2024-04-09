import React from 'react'
import { Routes as ReactRoutes, Route, Navigate, useSearchParams, useLocation } from 'react-router-dom'
import { AppRoutes } from './context/app-routes'
import { Game } from './modules/Game'
import { Portfolio } from './modules/Portfolio'

const NavigateToAddItems = () => {
  const { search } = useLocation()
  return <Navigate replace to={{ pathname: AppRoutes.PORTFOLIO, search }} />
}

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={AppRoutes.ROOT} element={<NavigateToAddItems />} />
      <Route path={AppRoutes.GAME_PORRFOLIO} element={<Game />} />
      <Route path={AppRoutes.PORTFOLIO} element={<Portfolio />} />
    </ReactRoutes>
  )
}
