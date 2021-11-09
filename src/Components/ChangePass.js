import React, { useState } from 'react'
import ChangePassInput from './ChangePassInput'

const ChangePass = ({ setUserState, userState, setLogined }) => {
  // const [inputPass, setInputPass] = useState({ rePass: '', confirm: '', })
  const [rePass, setRePass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const onClickChangePass = () => {
    console.log(rePass)
    if (rePass === confirmPass) {
      setUserState({ ...userState, password: rePass })
      setLogined(false)
    } else {
      alert('일치하지 않음')
    }
  }

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
        <ChangePassInput rePass={rePass} setRePass={setRePass} confirmPass={confirmPass} setConfirmPass={setConfirmPass} />
        <div>
          <button className='loginBtn' onClick={onClickChangePass}>Create</button>
        </div>
      </div>
    </>
  )
}

export default ChangePass