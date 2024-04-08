import React from 'react'
import { Routes as ReactRoutes, Route, Navigate, useSearchParams, useLocation } from 'react-router-dom'
import { AppRoutes } from './context/app-routes'
import { Game } from './modules/Game'

const NavigateToAddItems = () => {
  const { search } = useLocation()
  return <Navigate replace to={{ pathname: AppRoutes.GAME_PORRFOLIO, search }} />
}

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={AppRoutes.ROOT} element={<NavigateToAddItems />} />
      <Route path={AppRoutes.GAME_PORRFOLIO} element={<Game />} />
    </ReactRoutes>
  )
}
