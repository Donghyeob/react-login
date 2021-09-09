import React, { useState } from 'react'
import '../Css/loginForm.css'
import { UserOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

const LoginForm = () => {
  const [id, setId] = useState()
  const [password, setPassword] = useState()
  const [passShow, setPassShow] = useState(false)

  const onChangeId = (e) => {
    const inputText = e.target.value

    setId(inputText)
  }

  const onChangePassword = (e) => {
    const inputText = e.target.value

    setPassword(inputText)
  }

  return (
    <div className='loginContainer'>
      <div>
        <h2>로그인</h2>
        <span>사용자 아이디와 암호를 입력하세요.</span>
      </div>
      <div className='idContainer'>
        <input className='idBox' type='text' value={id} onChange={onChangeId} placeholder='Id' />
        <UserOutlined />
      </div>
      <div className='passContainer'>
        <input className='pwdBox' type='password' value={password} onChange={onChangePassword} placeholder='Password' />
        {passShow ? <EyeInvisibleOutlined /> : <EyeOutlined />}
      </div>
      <div>
        captcha
      </div>
      <div>
        Login button
        remember id
      </div>
    </div>
  )
}

export default LoginForm