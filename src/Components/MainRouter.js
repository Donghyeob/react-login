import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import SearchId from './SearchId'
import SearchPass from './SearchPass'
import LoginSuccess from './LoginSuccess'
// login 처리 argument 넘겨서

const MainRouter = () => {
  const [logined, setLogined] = useState(false)

  return (
    <Router>
      <Switch>
        <Route path='/' exact render={() => <Home setLogined={setLogined} />} />
        <Route path='/searchId' exact render={() => <SearchId />} />
        <Route path='/searchPass' exact render={() => <SearchPass />} />
        <Route path='/loginSuccess' exact render={() => logined ? <LoginSuccess /> : <Redirect to='/' />} />
      </Switch>
    </Router>
  )
}

export default MainRouter