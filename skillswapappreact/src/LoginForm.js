// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; // Add your LoginForm styles

const LoginForm = ({ handleLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({ ...prevCredentials, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.username.trim() === '' || credentials.password.trim() === '') {
      setError('Both username and password are required.');
    } else {
      setError('');
      handleLogin(credentials.username, credentials.password);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {error && <p className="error-message">{error}</p>}
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
