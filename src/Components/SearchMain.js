import React, { useState } from 'react'
import SearchId from './SearchId'
import SearchPass from './SearchPass'
import { ArrowLeftOutlined } from '@ant-design/icons'

const SearchMain = ({ props }) => {
  const [userName, setUserName] = useState('')
  const [userId, setUserId] = useState('')
  const [mobile, setMobile] = useState('')
  const [mail, setMail] = useState('')

  const onClickBack = () => {
    window.history.back()
  }

  return (
    <>
      <div className='searchContent'>
        {props === 'SearchId' && <SearchId userName={userName} setUserName={setUserName} setMobile={setMobile} />}
        {props === 'SearchPass' && <SearchPass />}
        <span onClick={onClickBack} className='searchBackBtn'><ArrowLeftOutlined />Back</span>
      </div>
    </>
  )
}

export default SearchMain