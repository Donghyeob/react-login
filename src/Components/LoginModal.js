import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';

const LoginModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <button className='loginBtn' onClick={showModal}>
        로그인
      </button>
      <Modal title="OTP Verification" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText='Verify'>
        <span>Please select a transfer methods.</span>
        <div></div>
      </Modal>
    </>
  );
};

export default LoginModal