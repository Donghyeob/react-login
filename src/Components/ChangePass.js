import React, { useState } from 'react'
import ChangePassInput from './ChangePassInput'
import VisibleInput from './VisibleInput'

const ChangePass = ({ props, userState, setUserState, setLogined }) => {
  const [rePass, setRePass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [currentPass, setCurrentPass] = useState('')

  const onClickChangePass = () => {
    console.log(rePass)
    console.log(userState.password === currentPass && rePass === confirmPass)
    console.log(currentPass)
    if (props === 'ChangePass') {
      if (rePass === confirmPass) {
        setUserState({ ...userState, password: rePass })
        setLogined(false)
      } else {
        alert('일치하지 않음')
      }
    } else if (props === 'ChangePassLong') {
      if (currentPass === userState.password && rePass === confirmPass) {
        setUserState({ ...userState, password: rePass })
        setLogined(false)
      } else {
        alert('일치하지않음')
      }
    }
  }

  return (
    <>
      <div className='contentContainer'>
        {props === 'ChangePass' && (<>
          <div>
            <h2>Please Set new password</h2>
          </div>
          <div>
            <div>The password has been temporarily changed.</div>
            <div>Change your password to use it safely.</div>
          </div>
        </>)}
        {props === 'ChangePassLong' && (<>
          <div>
            <h2>Please change your password.</h2>
          </div>
          <div>
            <span>You are using your password for a long time without changing it.</span>
            <span>Please change your password to keep your personal information safe and prevent damage caused by theft.</span>
          </div>
          <VisibleInput type={'password'} show={false} password={currentPass} setPassword={setCurrentPass} placeholder={'Current Password'} />
        </>)}
        <ChangePassInput rePass={rePass} setRePass={setRePass} confirmPass={confirmPass} setConfirmPass={setConfirmPass} />
        <div>
          <button className='submitBtn' onClick={onClickChangePass}>
            {props === 'ChangePass' ? 'Create' : props === 'ChangePassLong' ? 'Apply' : ''}
          </button>
        </div>
      </div>
    </>
  )
}

export default ChangePass