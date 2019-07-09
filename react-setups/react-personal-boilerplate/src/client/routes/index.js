import { lazy } from 'react'

const routes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import('client/routes/home/home'))
  }
]

export default routes;