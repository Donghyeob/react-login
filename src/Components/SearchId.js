import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import SearchInput from './SearchInput'

const SearchId = ({ searchUserName, setSearchUserName, setMobile }) => {
  const onChangInput = (e) => {
    const text = e.target.value
    setSearchUserName(text)
  }
  return (
    <>
      <div>
        <h2>아이디 찾기</h2>
      </div>
      <div className='inputContainer'>
        <input className='inputBox' type='text' placeholder='User Name' value={searchUserName} onChange={onChangInput} />
        <UserOutlined />
      </div>
      <SearchInput setMobile={setMobile} />
    </>
  )
}

export default SearchId