import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //şimdilik database böyle 
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
        email:"robinumutaydin@std.iyte.edu.tr",
        password: "robin"
    }
  ]
  
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
    } else {
      console.log('Invalid credentials');
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className='submit-button'>Login</button>
      </form>
    </div>
  );
}




export default Login;
