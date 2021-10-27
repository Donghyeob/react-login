import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

const LoginModal = ({ isModalVisible, setIsModalVisible, setLogined }) => {
  let limitTime = 300
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  const [limitTimer, setLimitTimer] = useState(null)
  const [authText, setAuthText] = useState('')
  const [authRandom, setAuthRandom] = useState('')

  const handleOk = () => {
    clearInterval(limitTimer)
    setMin('')
    setSec('')
    if (authText === authRandom) {
      setIsModalVisible(false)
      setLogined(true)
    } else {
      handleSend()
      setLogined(false)
    }
    setAuthText('')
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeText = (e) => {
    const text = e.target.value
    setAuthText(text)
  }

  const handleSend = () => {
    handleTimer()
    const chars = '0123456789'
    const stringLength = 4
    let randomText = ''
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length)
      randomText += chars.substring(rnum, rnum + 1)
    }
    setAuthRandom(randomText)
    console.log(randomText)
  }

  const handleTimer = () => {
    clearInterval(limitTimer)
    setLimitTimer(setInterval(() => {
      setMin(parseInt(limitTime / 60) + ':')
      setSec((limitTime % 60).toString().length < 2 ? '0' + (limitTime % 60) : limitTime % 60)
      limitTime -= 1;
    }, 1000))
  }

  return (
    <>
      <Modal title="OTP Verification" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText='Verify'>
        <div>
          <span>Please select a transfer methods.</span>
        </div>
        <div>
          <label><input type='radio' value={'sms'} name={'infra'} defaultChecked />SMS</label>
          <label><input type='radio' value={'email'} name={'infra'} />E-mail</label>
        </div>
        <div>
          <button onClick={handleSend}>Send</button>
        </div>
        <div>
          <input type='text' value={authText} onChange={onChangeText} /><span>{min}{sec}</span>
        </div>
        <div>
          <ul>
            <li><span>If if is not sent, please contact the administrator.</span></li>
            <li><span>If you extend the time more than 3 times, verification is restricted.</span></li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal