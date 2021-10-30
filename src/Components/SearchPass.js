import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import SearchInput from './SearchInput'

const SearchPass = ({ searchUserId, setSearchUserId, setMobile }) => {
  const onChangeInput = (e) => {
    const text = e.target.value
    setSearchUserId(text)
  }

  return (
    <>
      <div className='loginContainer'>
        <div>
          <h2>비밀번호 찾기</h2>
        </div>
        <div className='idContainer'>
          <input className='idBox' type='text' value={searchUserId} onChange={onChangeInput} placeholder='User ID' />
          <UserOutlined />
        </div>
        <SearchInput setMobile={setMobile} />
      </div>
    </>
  )
}

export default SearchPass