import React, { useState } from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'

const ChangePassInput = (inputPass, setInputPass) => {
  const [passShow, setPassShow] = useState(false)
  const [inputType, setInputType] = useState('password')
  const { rePass, confirm } = inputPass

  const onChangeInput = (e) => {
    const [name, value] = e.target;
    setInputPass({ ...inputPass, [name]: value })
  }

  const onClickPassVisible = () => {
    console.log('visible')
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
      <div className='passContainer'>
        <input className='pwdBox' name='rePass' type={inputType} value={rePass} onChange={onChangeInput} placeholder='Re-enter new password' />
        {
          passShow
            ? <EyeInvisibleOutlined onClick={onClickPassVisible} />
            : <EyeOutlined onClick={onClickPassVisible} />
        }
      </div>
      <div className='passContainer'>
        <input className='pwdBox' name='confirm' type={inputType} value={confirm} onChange={onChangeInput} placeholder='Re-enter new password' />
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