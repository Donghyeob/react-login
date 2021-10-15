import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';

const LoginModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let limitTime = 300;
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSend = () => {
    handleTimer()
  }

  const handleTimer = () => {
    setInterval(() => {
      setMin(parseInt(limitTime / 60) + ':')
      setSec((limitTime % 60).toString().length < 2 ? '0' + (limitTime % 60) : limitTime % 60)
      console.log((limitTime % 60).toString().length)
      limitTime -= 1;
      console.log('timer start')
    }, 1000)
  }

  useEffect(() => {
  }, [limitTime])

  return (
    <>
      <button className='loginBtn' onClick={showModal}>
        로그인
      </button>
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
      </Modal>
    </>
  );
};

export default LoginModal