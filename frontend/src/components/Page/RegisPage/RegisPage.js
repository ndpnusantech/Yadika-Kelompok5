import { useState } from 'react';
import './register.css';
import Def from './def.png';

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      email: email
    };
    localStorage.setItem("user", JSON.stringify(user));
    setUsername("");
    setEmail("");
    setPassword("");
    console.log("Registration successful!");
  };

  return (
    <div className="main">
      <div className="ccontainer">
        <div className="input-login">
          <h1 className="title" style={{fontSize:"2rem"}}>Register</h1>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              className="input"
              placeholder="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="email"
              className="input"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit" className="btn">
              Register
            </button>
          </form>
          <p className="log">
            Sudah Punya Akun? <a href="/Login">Login</a>
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
