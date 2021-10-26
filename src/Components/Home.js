import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import SearchMain from './SearchMain'
import LoginSuccess from './LoginSuccess'

const Home = () => {
  const [logined, setLogined] = useState(false)

  return (
    <>
      <div className='wrapper'>
        <div className='content'>
          <div></div>
          <div className='positionContainer'>
            <Router>
              <Switch>
                <Route path='/' exact render={() => <LoginForm setLogined={setLogined} />} />
                <Route path='/searchId' exact render={() => <SearchMain props={'SearchId'} />} />
                <Route path='/searchPass' exact render={() => <SearchMain props={'SearchPass'} />} />
                <Route path='/loginSuccess' exact render={() => logined ? <LoginSuccess /> : <Redirect to='/' />} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
      <div className='footer'>
        <span>copyright(c) 2021 k sat corp. all right reserved.</span>
      </div>
    </>
  )
}

export default Home