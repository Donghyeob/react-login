import React, { useState } from 'react'
import SearchId from './SearchId'
import SearchPass from './SearchPass'

const SearchMain = ({ props }) => {
  const [userName, setUserName] = useState('')
  const [userId, setUserId] = useState('')
  const [mobile, setMobile] = useState('')
  const [mail, setMail] = useState('')

  return (
    <>
      {props === 'SearchId' && <SearchId userName={userName} setUserName={setUserName} setMobile={setMobile} />}
      {props === 'SearchPass' && <SearchPass />}
    </>
  )
}

export default SearchMain