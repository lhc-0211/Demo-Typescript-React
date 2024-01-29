import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { State } from './reduces/index';
import * as Actions from './containers/crash-course/actions'
import { bindActionCreators } from 'redux';
import { loginRequest } from './containers/user/actions'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const dispatch = useDispatch();
  const money = useSelector((state: State) => state.bank)
  const loginState = useSelector((state: State) => state.login)
  const [modalShow, setModalShow] = React.useState(false);
  const [deposit, setDeposit] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [moneyHanlde, setMoneyHanlde] = React.useState<number>(0);


  console.log(loginState.requesting);

  const handleLogin = () => {
    dispatch(loginRequest(username, password) as any);
  };

  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(Actions, dispatch)

  const handleDeposit = () => {
    setModalShow(true);
    setDeposit(true);
  };

  const handleHide = () => {
    setModalShow(false)
    setDeposit(false)
  }

  const handleMoney = () => {
    setModalShow(false);
    deposit ? depositMoney(moneyHanlde) : withdrawMoney(moneyHanlde);
    setDeposit(false);
  }

  return (
    <div className="App">

      {
        loginState.successful ? (
          <>
            <h1>Bank</h1>
            <h2>{money}</h2>
            <button
              onClick={() => handleDeposit()}
            >Deposit</button>
            <button
              onClick={() => setModalShow(true)}
            >Withdraw</button>
            <button
              onClick={() => bankruptMoney(0)}
            >Bankrupt</button></>
        ) : (
          <div>
            <h1>Đăng nhập</h1>
            <form action="">
              <div className="form-group">
                <label htmlFor="">Tài khoản</label>
                <input type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Mật khẩu</label>
                <input type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
            <button onClick={() => handleLogin()} disabled={loginState.requesting}>
              {loginState.requesting ? 'Logging in...' : 'Login'}
            </button>
            {loginState.messages.map((mess, index) => (
              <p key={index} style={{
                color: '#f00000'
              }}>{mess.body} </p>
            ))}
          </div>
        )
      }
      <Modal
        show={modalShow}
        onHide={() => handleHide()}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {
              deposit ? 'Nhập số tiền muốn gửi' : 'Nhập số tiền muốn rút'
            }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text"
            onChange={(e) => setMoneyHanlde(parseFloat(e.target.value))}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleHide()}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => handleMoney()}>
            Xử lý
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
