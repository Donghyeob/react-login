import React, { useEffect, useRef, useState } from 'react'
import { RedoOutlined } from '@ant-design/icons'

const Captcha = ({ captchaString, setCaptchaString, captcha, setCaptcha }) => {
  const [ctx, setCtx] = useState(null)
  const canvasRef = useRef()

  const onChangeCaptcha = (e) => {
    const inputText = e.target.value
    setCaptcha(inputText)
  }

  const randomString = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
    const stringLength = 6
    let randomText = ''
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length)
      randomText += chars.substring(rnum, rnum + 1)
    }
    setCaptchaString(randomText)
  }

  const drawCaptcha = () => {
    setCtx(canvasRef.current.getContext('2d'))
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.font = 'italic 20pt sans-serif'
    ctx.fillStyle = 'black'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(captchaString, canvasRef.current.width / 2, canvasRef.current.height / 2)
    ctx.beginPath()
    ctx.moveTo(100, 25)
    ctx.lineTo(200, 25)
    ctx.lineWidth = 1
    ctx.stroke()
  }

  const onClickFresh = () => {
    randomString()
    drawCaptcha()
  }

  useEffect(() => {
    randomString()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (canvasRef) {
        setCtx(canvasRef.current.getContext('2d'))
        if (ctx) {
          drawCaptcha()
        } else {
          console.log('not set State?')
        }
      } else console.log('not Ref load')
    }, 100)
  }, [ctx, captchaString])

  return (
    <>
      <div className='captchaContainer'>
        <span>아래 이미지를 보이는대로 입력하세요.</span>
        <div>
          <canvas ref={canvasRef} width={300} height={50}></canvas>
          <RedoOutlined onClick={onClickFresh} />
        </div>
        <input type='text' value={captcha} placeholder='Enter Captcha' onChange={onChangeCaptcha} />
      </div>
    </>
  )
}

export default Captcha