// App.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Implement your login logic here
    // For now, just set loggedIn to true
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to SwapSkill</h1>
      </header>
      <div className="content">
        {loggedIn ? (
          <HomePage handleLogout={handleLogout} loggedIn={loggedIn} />
        ) : (
          <div className="login-form-container">
            <LoginForm handleLogin={handleLogin} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
