import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import SearchId from './SearchId'
import SearchPass from './SearchPass'
import LoginSuccess from './LoginSuccess'

const Home = () => {
  const [logined, setLogined] = useState(false)

  return (
    <>
      <div className='content'>
        <div>image</div>
        <div>
          <Router>
            <Switch>
              <Route path='/' exact render={() => <LoginForm setLogined={setLogined} />} />
              <Route path='/searchId' exact render={() => <SearchId />} />
              <Route path='/searchPass' exact render={() => <SearchPass />} />
              <Route path='/loginSuccess' exact render={() => logined ? <LoginSuccess /> : <Redirect to='/' />} />
            </Switch>
          </Router>
        </div>
      </div>
      <div className='footer'>
        <h1>나는 푸터</h1>
      </div>
    </>
  )
}

export default Home