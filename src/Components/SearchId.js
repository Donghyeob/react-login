import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import SearchInput from './SearchInput'

const SearchId = () => {
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
        <SearchInput />
      </div>
    </>
  )
}

export default SearchId