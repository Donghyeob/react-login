import React, { useEffect, useRef, useState } from 'react'
import { UserOutlined, MobileOutlined, MailOutlined } from '@ant-design/icons'

const SearchId = () => {
  const [mobile, setMobile] = useState('')
  const [mail, setMail] = useState('')
  const mobileRef = useRef()
  const mailRef = useRef()

  const onClickRadio = (e) => {
    const currentRadio = e.target.value;
    if (currentRadio === 'sms') {
      mobileRef.current.disabled = false
      mailRef.current.disabled = true
      mobileRef.current.focus()
    } else if (currentRadio === 'email') {
      mailRef.current.disabled = false
      mobileRef.current.disabled = true
      mailRef.current.focus()
    }
  }

  useEffect(() => {
    mobileRef.current.focus()
    mailRef.current.disabled = true
  }, [])

  return (
    <>
      <div className='loginContainer'>
        <div>
          <h2>아이디 찾기</h2>
        </div>
        <div className='idContainer'>
          <input className='idBox' type='text' placeholder='User Name' />
          <UserOutlined />
        </div>
        <div>
          <label><input type='radio' onClick={onClickRadio} value={'sms'} name={'infra'} defaultChecked />SMS</label>
          <label><input type='radio' onClick={onClickRadio} value={'email'} name={'infra'} />E-mail</label>
        </div>
        <div className='idContainer'>
          <input className='searchInput' type='text' ref={mobileRef} placeholder='Mobile Phone Number' />
          <MobileOutlined />
        </div>
        <div className='idContainer'>
          <input className='searchInput' type='text' ref={mailRef} placeholder='E-mail' />
          <MailOutlined />
        </div>
      </div>
    </>
  )
}

export default SearchId