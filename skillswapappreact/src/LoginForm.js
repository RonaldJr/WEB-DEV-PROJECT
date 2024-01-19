import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Assuming you're using React Router

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  // ... other logic ...

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegistrationForm onRegister={() => setIsRegistered(true)} />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}
