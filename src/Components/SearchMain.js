import React, { useState } from 'react'
import SearchId from './SearchId'
import SearchPass from './SearchPass'
import { userInfo } from '../Data/userInfo'
import { ArrowLeftOutlined } from '@ant-design/icons'

const SearchMain = ({ props }) => {
  const [searchUserName, setSearchUserName] = useState('')
  const [searchUserId, setSearchUserId] = useState('')
  const [mobile, setMobile] = useState('')
  const [mail, setMail] = useState('')
  const regExPhone = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)

  const handleSearchId = () => {
    const comparePhone = regExPhone.exec(mobile)
    comparePhone ? (searchUserName === userInfo.name ? console.log(userInfo.id) : alert('이름이 이상한디')) : alert('번호가 이상한디')
  }

  const handleSearchPass = () => {
    const comparePhone = regExPhone.exec(mobile)
    comparePhone ? (searchUserId === userInfo.id ? console.log(userInfo.password) : alert('아이디 이상한디')) : alert('번호가 이상한디')
  }

  const onClickSend = () => {
    props === 'SearchId' && handleSearchId()
    props === 'SearchPass' && handleSearchPass()
  }

  const onClickBack = () => {
    window.history.back()
  }

  return (
    <>
      <div className='contentContainer'>
        {props === 'SearchId' && <SearchId searchUserName={searchUserName} setSearchUserName={setSearchUserName} setMobile={setMobile} />}
        {props === 'SearchPass' && <SearchPass searchUserId={searchUserId} setSearchUserId={setSearchUserId} setMobile={setMobile} />}
        <div>
          <button className='submitBtn' onClick={onClickSend}>Send</button>
        </div>
        <span onClick={onClickBack} className='pageBackBtn'><ArrowLeftOutlined />Back</span>
      </div>
    </>
  )
}

export default SearchMain