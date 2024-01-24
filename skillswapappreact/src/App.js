import React, { useState } from "react";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Member from "./Member";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showMember, setShowMember] = useState(false);


  const handleLogin = () => {
    if (username.trim() !== "" && password.trim() !== "") {
      setLoggedIn(true);
    } else {
      alert("Please enter your username and password.");
    }
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
          <li>
            <button onClick={handleAboutUsClick}>About Us!</button>
          </li>
          <li>
            <button onClick={handleMemberClick}>Members</button>
          </li>
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
      </div>
    </div>
  );
};

export default App;
