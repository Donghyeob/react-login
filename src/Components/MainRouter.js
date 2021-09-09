import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact render={() => <Home />} />
      </Switch>
    </Router>
  )
}

export default MainRouter