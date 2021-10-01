import MainRouter from "./Components/MainRouter";

function App() {
  const userInfo = {
    id: 'admin',
    password: '123',
  }
  return (
    <>
      <MainRouter userInfo={userInfo} />
    </>
  );
}

export default App;
