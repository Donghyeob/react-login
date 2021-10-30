import React, { useState } from 'react'
import ChangePassInput from './ChangePassInput'

const ChangePass = () => {
  const [inputPass, setInputPass] = useState({ rePass: '', confirm: '', })

  return (
    <>
      <div className='loginContainer'>
        <div>
          <h2>Please Set new password</h2>
        </div>
        <div>
          <div>The password has been temporarily changed.</div>
          <div>Change your password to use it safely.</div>
        </div>
        <ChangePassInput inputPass={inputPass} setInputPass={setInputPass} />
        <ChangePassInput confirm={inputPass} setConfirm={setInputPass} />
      </div>
    </>
  )
}

export default ChangePass