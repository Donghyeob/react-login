import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import SearchId from './SearchId'
import SearchPass from './SearchPass'
import LoginSuccess from './LoginSuccess'
// login 처리 argument 넘겨서

const MainRouter = ({ userInfo }) => {
  console.log(userInfo.id)

  return (
    <Router>
      <Switch>
        <Route path='/' exact render={() => <Home />} />
        <Route path='/searchId' exact render={() => <SearchId />} />
        <Route path='/searchPass' exact render={() => <SearchPass />} />
        <Route path='/loginSuccess' exact render={() => <LoginSuccess />} />
      </Switch>
    </Router>
  )
}

export default MainRouter