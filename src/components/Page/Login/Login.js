import { useState } from 'react';
import '../RegisPage/register.css'
import Def from './def.png';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username === username && user.password === password) {
      // login successful
      console.log("Login successful!");
      setError("");
    } else {
      // login failed
      setError("Invalid username or password.");
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="main">
      <div className="ccontainer">
        <div className="input-login">
          <h1 className="title" style={{fontSize:"2rem"}}>Login</h1>
          <form onSubmit={handleLogin}>
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
              type="password"
              className="input"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {error && <p className="error">{error}</p>}
            <br/>
            <button type="submit" className="btn">
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

export default Login;
