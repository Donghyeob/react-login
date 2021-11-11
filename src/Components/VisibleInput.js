import React, { useState } from 'react'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

const VisibleInput = ({ type, show, password, setPassword, placeholder }) => {
  const [inputType, setInputType] = useState(type)
  const [passShow, setPassShow] = useState(show)

  const onChangePassword = (e) => {
    const inputText = e.target.value
    setPassword(inputText)
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
        <input className='inputBox' type={inputType} value={password} onChange={onChangePassword} placeholder={placeholder} />
        {
          passShow
            ? <EyeInvisibleOutlined onClick={onClickPassVisible} />
            : <EyeOutlined onClick={onClickPassVisible} />
        }
      </div>
    </>
  )
}

export default VisibleInput