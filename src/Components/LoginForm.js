import React, { useEffect, useRef, useState } from 'react'
import '../Css/loginForm.css'
import { UserOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import Captcha from './Captcha'

const LoginForm = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [passShow, setPassShow] = useState(false)
  const [captcha, setCaptcha] = useState('')
  const [captchaString, setCaptchaString] = useState('')
  const visiRef = useRef()
  const checkRef = useRef()

  const onChangeId = (e) => {
    const inputText = e.target.value
    setId(inputText)
  }

  const onChangePassword = (e) => {
    const inputText = e.target.value
    setPassword(inputText)
  }

  const onClickPassVisible = () => {
    if (!passShow) {
      setPassShow(true)
      visiRef.current.type = 'text'
    } else {
      setPassShow(false)
      visiRef.current.type = 'password'
    }
  }

  const onClickFixId = (e) => {
    const checked = e.target.checked
    if (checked) {
      localStorage.setItem('id', id)
      localStorage.setItem('checked', true)
    } else {
      localStorage.removeItem('id')
      localStorage.removeItem('checked')
    }
  }

  const onClickLogin = () => {
    if (captchaString === captcha) {
      console.log('Login success@@@')
    } else {
      console.log('Login fail@@@')
    }
  }

  useEffect(() => {
    localStorage.getItem('id') && setId(localStorage.getItem('id'))
    localStorage.getItem('checked') && (checkRef.current.checked = true)
  })

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
        <input className='pwdBox' ref={visiRef} type='password' value={password} onChange={onChangePassword} placeholder='Password' />
        {
          passShow
            ? <EyeInvisibleOutlined onClick={onClickPassVisible} />
            : <EyeOutlined onClick={onClickPassVisible} />
        }
      </div>
      <div>
        <Captcha
          captchaString={captchaString}
          setCaptchaString={setCaptchaString}
          captcha={captcha}
          setCaptcha={setCaptcha} />
      </div>
      <div>
        <button className='loginBtn' onClick={onClickLogin}>로그인</button>
        <div className='fixId'>
          <div><input type='checkbox' ref={checkRef} onClick={onClickFixId} />아이디 저장</div>
          <div><span>아이디 찾기</span><span>|</span><span>비밀번호 찾기</span></div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm