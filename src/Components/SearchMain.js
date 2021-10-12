import React, { useState } from 'react'
import SearchId from './SearchId'
import SearchPass from './SearchPass'

const SearchMain = ({ props }) => {
  const [mobile, setMobile] = useState('')
  const [mail, setMail] = useState('')

  return (
    <>
      {props === 'SearchId' && <SearchId />}
      {props === 'SearchPass' && <SearchPass />}
    </>
  )
}

export default SearchMain