import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

const LoginModal = ({ isModalVisible, setIsModalVisible }) => {
  let limitTime = 300
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')
  const [limitTimer, setLimitTimer] = useState(null)

  const handleOk = () => {
    setIsModalVisible(false);
    clearInterval(limitTimer)
    setMin('')
    setSec('')
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSend = () => {
    handleTimer()
  }

  const handleTimer = () => {
    clearInterval(limitTimer)
    setLimitTimer(setInterval(() => {
      setMin(parseInt(limitTime / 60) + ':')
      setSec((limitTime % 60).toString().length < 2 ? '0' + (limitTime % 60) : limitTime % 60)
      console.log((limitTime % 60).toString().length)
      limitTime -= 1;
      console.log('timer start')
    }, 1000))
  }

  useEffect(() => {

  }, [limitTime])

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
          <input type='text' /><span>{min}{sec}</span>
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