import React, { useEffect, useRef, useState } from 'react'

const Captcha = () => {
  const [captchaString, setCaptchaString] = useState()
  const canvasRef = useRef()
  let ctx = null

  const drawCaptcha = () => {
    ctx.font = '30px serif'
    ctx.fillStyle = 'black'
    ctx.fillText('captchaText', 100, 200);
  }

  const randomString = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
    const stringLength = 6
    let randomString = ''
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length)
      randomString += chars.substring(rnum, rnum + 1)
    }
    setCaptchaString(randomString)
  }

  useEffect(() => {
    randomString()
    ctx = canvasRef.current.getContext('2d')
    drawCaptcha()
  }, [])

  return (
    <>
      <span>아래 이미지를 보이는대로 입력하세요.</span>
      <canvas className='captchaContainer' ref={canvasRef} style={{ width: '250px', height: '150px' }}></canvas>
    </>
  )
}

export default Captcha