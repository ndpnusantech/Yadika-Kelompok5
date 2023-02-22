import React from 'react';
import './register.css';
import Def from './def.png';

function Register() {
  return (
    <div className="main">
      <div className="ccontainer">
        <div className="input-login">
          <h1 className="title">Register</h1>
          <form action="">
            <input
              type="text"
              className="input"
              placeholder="Username"
              id="username"
            />
            <br />
            <input
              type="email"
              className="input"
              placeholder="Email"
              id="email"
            />
            <br />
            <input
              type="number"
              className="input"
              placeholder="No Telp"
              id="No Telp"
            />
            <br />

            <input
              type="password"
              className="input"
              placeholder="password"
              id="password"
            />
            <br />
            <input
              type="password"
              className="input"
              placeholder="password"
              id="password"
            />

            <br />
            <button type="button" className="btn" onclick="regis()">
              Register
            </button>
          </form>
          <p className="log">
            Sudah Punya Akun? <a href="index.html">Login</a>
          </p>
        </div>
        <div className="image">
          <img className="logoRegis" src={Def} />
        </div>
      </div>
    </div>
  );
}

export default Register;
