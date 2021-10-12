import React, { useRef, useEffect } from 'react'
import { MobileOutlined, MailOutlined } from '@ant-design/icons'

const SearchInput = () => {
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
    </>
  )
}

export default SearchInput