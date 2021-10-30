import React from 'react'
import { Link } from 'react-router-dom'

const LoginSuccess = () => {
  return (
    <>
      LoginSuccess!!
      <div><Link to='/changePass'>(임시)비밀번호 변경</Link><span> | </span><Link to='/changePassLong'>(임시)오래된 비밀번호 변경</Link></div>
    </>
  )
}

export default LoginSuccess