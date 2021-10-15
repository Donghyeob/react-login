import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
.loginContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.idContainer {
  display: flex;
  flex-direction: row;
  margin-left: -30px;
}
.anticon-user {
  line-height: 40px;
  margin-left: -30px;
}
.anticon-mobile {
  line-height: 40px;
  margin-left: -30px;
}
.anticon-mail {
  line-height: 40px;
  margin-left: -30px;
}
.idBox {
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
}
.searchInput {
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
  background-color: lightgray;
}
.searchInput:focus {
  background-color: white;
}
.passContainer {
  display: flex;
  flex-direction: row;
  margin-left: -30px;
}
.anticon-eye {
  line-height: 40px;
  margin-left: -30px;
  cursor: pointer;
}
.anticon-eye-invisible {
  line-height: 40px;
  margin-left: -30px;
  cursor: pointer;
}
.pwdBox {
  width: 300px;
  height: 30px;
}

.loginBtn {
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
.content {
  width: 1100px;
  display: flex;
  flex-direction: row;
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
.ant-modal {
  width: 400px !important;
}
.ant-modal-content {
  text-align: center;
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
`

export default GlobalStyle