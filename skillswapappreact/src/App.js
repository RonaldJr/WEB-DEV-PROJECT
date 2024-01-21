// App.js
import React, { useState } from 'react';
import './App.css';
import HomePage from './HomePage';

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
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}

      {loggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form>
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
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      )}

      {loggedIn && <HomePage />}
    </div>
  );
}

export default App;
