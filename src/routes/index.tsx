import { HashRouter, Route, Switch } from 'react-router-dom'

import { AuthProvider } from '../contexts/AuthContext'
import Dashboard from '../Pages/Dashboard'
import Login from '../Pages/Login'

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <AuthProvider>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
        </AuthProvider>
      </Switch>
    </HashRouter>
  )
}

export default Routes
