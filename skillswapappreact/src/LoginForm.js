// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; // Add your LoginForm styles

const LoginForm = ({ handleLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(credentials.username, credentials.password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
