import React, { useState } from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'

const ChangePassInput = ({ rePass, setRePass, confirmPass, setConfirmPass }) => {
  const [passShow, setPassShow] = useState(false)
  const [inputType, setInputType] = useState('password')
  // const { rePass, confirm } = inputPass

  // const onChangeInput = (e) => {
  //   const [name, value] = e.target;
  //   setInputPass({ ...inputPass, [name]: value })
  // }

  const onChangeInputRe = (e) => {
    const text = e.target.value
    setRePass(text)
  }

  const onChangeInputConfirm = (e) => {
    const text = e.target.value
    setConfirmPass(text)
  }

  const onClickPassVisible = () => {
    if (!passShow) {
      setPassShow(true)
      setInputType('text')
    } else {
      setPassShow(false)
      setInputType('password')
    }
  }

  return (
    <>
      <div className='inputContainer'>
        <input className='inputBox' name='rePass' type={inputType} value={rePass} onChange={onChangeInputRe} placeholder='Re-enter new password' />
        {
          passShow
            ? <EyeInvisibleOutlined onClick={onClickPassVisible} />
            : <EyeOutlined onClick={onClickPassVisible} />
        }
      </div>
      <div className='inputContainer'>
        <input className='inputBox' name='confirm' type={inputType} value={confirmPass} onChange={onChangeInputConfirm} placeholder='Re-enter new password' />
        {
          passShow
            ? <EyeInvisibleOutlined onClick={onClickPassVisible} />
            : <EyeOutlined onClick={onClickPassVisible} />
        }
      </div>
    </>
  )
}

export default ChangePassInput