
// SignupForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    if (email && password) {
      console.log("Signup successful");
      navigate('/login');
    }
  };

  return (
    <div className="login-background">
      <div className="cat-container">
        <img src="src/assets/14.png" alt="Cat" className="cat-icon" />
      </div>
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="emailInput" placeholder="Email" />
          </div>
          <div className="login-form-group">
            <input type="password" id="passwordInput" placeholder="Password" />
          </div>

          <button type="submit" className="primary-button">Log in</button>
          <button
            type="button"
            className="secondary-button"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
