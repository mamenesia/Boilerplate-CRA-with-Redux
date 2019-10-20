import React from 'react'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

const Landing = Loadable({
  loader: () => import('./views/pages/Landing'),
  loading: Loading
})

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Landing',
    component: Landing,
  },
]

export default routes