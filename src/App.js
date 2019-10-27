import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes'
import DefaultHeader from './containers'

function App() {
  return (
    <Router>
      <>
        <DefaultHeader />

        <Switch>
          {routes &&
            routes.map(item => (
              <Route
                exact={item.exact}
                path={item.path}
                component={item.component}
                key={item.name}
              />
            ))}
        </Switch>
      </>
    </Router>
  )
}

export default App
