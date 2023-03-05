import React from 'react';
import Def from './def.png';
import './login.css';

function Register() {
  return (
    <div className="main">
      <div className="ccoontainer">
        <div className="input-login">
          <h1 className="title" style={{fontSize:"2rem"}}>Login</h1>
          <form action="">
            <input
              type="text"
              className="input"
              placeholder="Username"
              id="username"
            />
            <br />

            <input
              type="password"
              className="input"
              placeholder="password"
              id="password"
            />
            <br />

            <br />
            <button type="button" className="btn" onclick="lgn()">
              Login
            </button>
          </form>
          <p className="log">
            Belum mempunyai akun? <a href="/RegisPage">Buat akun</a>
          </p>
        </div>
        <div className="image">
          <img alt="" className="logoRegis" src={Def} />
        </div>
      </div>
    </div>
  );
}

export default Register;
