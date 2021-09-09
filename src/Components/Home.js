import React from 'react'
import '../Css/homeCss.css'
import LoginForm from './LoginForm'

const Home = () => {
  return (
    <>
      <div className='content'>
        <div>image</div>
        <div><LoginForm /></div>
      </div>
      <div className='footer'>
        <h1>나는 푸터</h1>
      </div>
    </>
  )
}

export default Home