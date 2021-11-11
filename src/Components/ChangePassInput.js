import React, { useState } from 'react'
import VisibleInput from './VisibleInput'

const ChangePassInput = ({ rePass, setRePass, confirmPass, setConfirmPass }) => {
  return (
    <>
      <VisibleInput type={'password'} show={false} password={rePass} setPassword={setRePass} placeholder={'Re-enter new password'} />
      <VisibleInput type={'password'} show={false} password={confirmPass} setPassword={setConfirmPass} placeholder={'Confirm new password'} />
    </>
  )
}

export default ChangePassInput