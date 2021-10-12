import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import SearchInput from './SearchInput'

const SearchPass = () => {
  return (
    <>
      <div className='loginContainer'>
        <div>
          <h2>비밀번호 찾기</h2>
        </div>
        <div className='idContainer'>
          <input className='idBox' type='text' placeholder='User ID' />
          <UserOutlined />
        </div>
        <SearchInput />
      </div>
    </>
  )
}

export default SearchPass