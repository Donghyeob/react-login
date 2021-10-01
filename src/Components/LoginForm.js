import React, { useEffect, useRef, useState } from 'react'
import '../Css/loginForm.css'
import { UserOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import Captcha from './Captcha'
import LoginModal from './LoginModal'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [passShow, setPassShow] = useState(false)
  const [captcha, setCaptcha] = useState('')
  const [captchaString, setCaptchaString] = useState('')
  // const [isModalVisible, setIsModalVisible] = useState(false);
  const visiRef = useRef()
  const checkRef = useRef()
  const modalRef = useRef()

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

  const FixedId = (e) => {
    console.log(e)
    const exdate = new Date()
    if (e) {
      exdate.setDate(exdate.getDate() + 30)
      document.cookie = 'id=' + id + ';' + 'path=/;expires=' + exdate.toGMTString()
    } else {
      exdate.setDate(exdate.getDate() - 1)
      document.cookie = 'id="";path=/;expires=' + exdate.toGMTString()
    }
  }

  const onClickChecked = (e) => {
    const checked = e.target.checked
    if (checked) {
      FixedId(true)
    } else {
      FixedId(false)
    }
  }

  useEffect(() => {

  }, [id])

  useEffect(() => {
    let userId = document.cookie.split(';')[0].slice(3)
    if (userId !== '') {
      setId(userId)
      checkRef.current.checked = true
    } else {
      checkRef.current.checked = false
    }
  }, [])

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
        <button className='loginBtn'>로그인</button>
        {/* <LoginModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} modalRef={modalRef} /> */}
        <div className='fixId'>
          <label><input type='checkbox' ref={checkRef} onClick={onClickChecked} />아이디 저장</label>
          <div><Link to='/searchId'>아이디 찾기</Link><span> | </span><Link to='/searchPass'>비밀번호 찾기</Link></div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm