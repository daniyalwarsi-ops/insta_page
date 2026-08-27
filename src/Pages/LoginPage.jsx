import React from 'react';
import Hero from '../Component/Hero';
import LoginForm from '../Component/LoginForm';
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <Hero />
      <LoginForm />
    </div>
  );
}

export default LoginPage;