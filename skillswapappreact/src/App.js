// App.js

import React, { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import loginImage from "./login.jpg"

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      {loggedIn && (
        <div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          <h2>Welcome, {username}!</h2>
          <HomePage />
        </div>
      )}

      {!loggedIn && (
                          <div className='image-section'>
          <img src = {loginImage} alt = "Login" />
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
        </div>
      )}
    </div>
  );
}

export default App;
