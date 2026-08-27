import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();

  function goToSignup() {
    navigate("/signup");
  }

  return (
    <div className="login-form">
      <div className="login-form__inner">
        <h2 className="login-form__title">Log into Instagram</h2>

        <form className="login-form__form">
          <div>
            <input
              type="text"
              name="identifier"
              placeholder="Mobile number, username or email"
              className="field-input"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="field-input"
            />
          </div>

          <Button type="button" variant="primary">Log in</Button>
        </form>

        <div className="login-form__forgot">
          <a>Forgot password?</a>
        </div>

        <div className="login-form__alt-actions">
          <Button variant="secondary" icon="./public/facebook.png">
            Log in with Facebook
          </Button>

          <Button variant="outline" onClick={goToSignup}>
            Create new account
          </Button>
        </div>

        <div className="login-form__meta-branding">
          <span>∞</span> Meta
        </div>
      </div>
    </div>
  );
}

export default LoginForm;