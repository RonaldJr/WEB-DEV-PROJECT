// App.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import AboutUs from './AboutUs'; 
import Member from './Member'; 

import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showMember, setShowMember] = useState(false);

  const handleLogin = (username, password) => {
    // Implement your login logic here
    // For now, just set loggedIn to true
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleAboutUsClick = () => {
    setShowAboutUs(true);
  };

  const handleAboutUsClose = () => {
    setShowAboutUs(false);
  };

  const handleMemberClick = () => {
    setShowMember(true);
  };

  const handleMemberClose = () => {
    setShowMember(false);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to SwapSkill</h1>
        <ul className="nav-links">
          <li><button onClick={handleAboutUsClick}>About Us!</button></li>
          <li><button onClick={handleMemberClick}>Meet our Developers!</button></li>
        </ul>
      </header>   

      <div className="content">
        {showAboutUs ? (
          <AboutUs handleAboutUsClick={handleAboutUsClose} />
        ) : showMember ? (
          <Member handleMemberClick={handleMemberClose} />
        ) : loggedIn ? (
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
