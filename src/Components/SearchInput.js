import React, { useRef, useEffect } from 'react'
import { MobileOutlined, MailOutlined } from '@ant-design/icons'

const SearchInput = ({ setMobile }) => {
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

  const onChangePhone = (e) => {
    const text = e.target.value
    setMobile(text)
  }

  useEffect(() => {
    mobileRef.current.focus()
    mailRef.current.disabled = true
  }, [])

  return (
    <>
      <div className='infraContainer'>
        <label><input type='radio' onClick={onClickRadio} value={'sms'} name={'infra'} defaultChecked />SMS</label>
        <label><input type='radio' onClick={onClickRadio} value={'email'} name={'infra'} />E-mail</label>
      </div>
      <div className='inputContainer'>
        <input className='inputBox' type='number' ref={mobileRef} onChange={onChangePhone} placeholder='Mobile Phone Number' />
        <MobileOutlined />
      </div>
      <div className='inputContainer'>
        <input className='inputBox' type='email' ref={mailRef} placeholder='E-mail' />
        <MailOutlined />
      </div>
    </>
  )
}

export default SearchInput