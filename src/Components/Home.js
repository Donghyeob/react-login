import React from 'react'
import '../Css/homeCss.css'
import LoginForm from './LoginForm'

const Home = ({ setLogined }) => {
  return (
    <>
      <div className='content'>
        <div>image</div>
        <div><LoginForm setLogined={setLogined} /></div>
      </div>
      <div className='footer'>
        <h1>나는 푸터</h1>
      </div>
    </>
  )
}

export default Home