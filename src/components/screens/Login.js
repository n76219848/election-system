import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './iyteee.png';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // şimdilik database böyle
  const database = [
    {
      email: "erendemirel@std.iyte.edu.tr",
      password: "eren"
    },
    {
      email: "rumeysacoskun@std.iyte.edu.tr",
      password: "rumeysa"
    },
    {
      email: "robinumutaydin@std.iyte.edu.tr",
      password: "robin"
    }
  ];

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = database.find((user) => user.email === email);
    if (user && user.password === password) {
      console.log('Login successful');
      navigate('/main');
    } else {
      console.log('Invalid credentials');
    }
  };

  const handleForgotPassword = () => {
    window.location.href = 'https://mail-app.iyte.edu.tr/ForgotMyPassword/';
  };

  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="IYTE Logo" className="logo" />
          <h2 className="header-title">Izmir Institute of Technology</h2>
        </div>
        <p className="system-text">IZTECH Online Election System</p>
      </header>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <label className={email ? "hidden-label" : ""}>Email:</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <label className={password ? "hidden-label" : ""}>Password:</label>
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
          <button onClick={handleForgotPassword} className="forgot-password-button">
            Forgot My Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
