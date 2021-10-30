import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import SearchMain from './SearchMain'
import LoginSuccess from './LoginSuccess'
import ChangePass from './ChangePass'
import ChangePassLong from './ChangePassLong'
import { userInfo } from '../Data/userInfo'

const Home = () => {
  const [logined, setLogined] = useState(false)
  const [userState, setUserState] = useState({ id: userInfo.id, password: userInfo.password })

  return (
    <>
      <div className='wrapper'>
        <div className='content'>
          <div></div>
          <div className='positionContainer'>
            <Router>
              {logined ? <Redirect to='/loginSuccess' /> : <Redirect to='/' />}
              <Switch>
                <Route path='/' exact render={() => <LoginForm userState={userState} setLogined={setLogined} />} />
                <Route path='/searchId' exact render={() => <SearchMain props={'SearchId'} />} />
                <Route path='/searchPass' exact render={() => <SearchMain props={'SearchPass'} />} />
                <Route path='/changePass' exact render={() => <ChangePass />} />
                <Route path='/changePassLong' exact render={() => <ChangePassLong />} />
                <Route path='/loginSuccess' exact render={() => <LoginSuccess />} />
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