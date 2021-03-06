import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
.positionContainer {
  position: relative;
}
.contentContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.headerContainer {
  
}
// 공통 input 및 anticon 위치
.inputContainer {
  display: flex;
  flex-direction: row;
  margin-left: -30px;
}
.inputContainer > .anticon {
  line-height: 32px;
  margin-left: -30px;
}
.anticon-arrow-left {
  margin-right: 10px;
}
.inputBox {
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
}

.submitBtn {
  width: 308px;
  height: 40px;
  margin-left: -18px;
  padding: 0;
  background-color: tomato;
  color: white;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
}
.fixId {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  margin-left: -30px;
}
.captchaContainer {
  display: flex;
  flex-direction: column;
  margin-left: -18px;
  margin-bottom: 20px;
}
.captchaContainer > div > canvas {
  background-color: lightgray;
  margin-left: 16px;
}
.captchaContainer > input {
  width: 300px;
  height: 30px;
  margin-left: 12px;
}
.wrapper {
  display: flex;
  justify-content: center;
}
.content {
  width: 1100px;
  display: flex;
  flex-direction: row;
  margin: 100px;
}
.content > div:nth-child(1) {
  background-color: skyblue;
  width: 50%;
  height: 600px;
}
.content > div:nth-child(2) {
  width: 50%;
  margin-top: 70px;
}
.footer {
  width: 1100px;
  margin: 0 auto;
  text-align: center;
  border-top: 1px solid lightgray;
  padding-top: 20px;
}
.modalInput {
  width: 300px;
}
.modalInput > span {
  margin-left: -40px;
}
.ant-modal {
  width: 400px !important;
}
.ant-modal-content {
  text-align: center;
}
.infraContainer {
  margin: 0 0 10px -15px;
}
.infraContainer input[type='radio'] {
  margin: 0 15px 0 5px;
}
.infraContainer label {
  padding: 8px 80px 8px 5px;
  margin: 0 3px 10px 3px;
  border-radius: 5px;
  background: #f2f2f2;
}
.ant-modal-body > div:nth-child(1) {
  margin-top: 0px;
}
.ant-modal-body > div {
  margin-top: 20px;
}
.ant-modal-body > div:nth-child(2) > label {
  cursor: pointer;
}
.ant-modal-body > div:nth-child(3) > button {
  width: 98%;
  border: none;
  border-radius: 5px;
  padding: 8px 0 8px 0;
  background: #52bf57;
  color: white;
  cursor: pointer;
}
.ant-modal-body > div:nth-child(5) > ul {
  font-size: 10px;
  text-align: left;
}
.ant-modal-footer {
  text-align: center;
}
.ant-modal-footer > .ant-btn {
  width: 40%;
}
.ant-modal-footer > .ant-btn-primary {
  background: tomato;
  border-color: tomato;
}
.pageBackBtn {
  position: absolute;
  bottom: 0px;
  left: 15px;
  display: block;
  cursor: pointer;
  color: black;
}
`

export default GlobalStyle