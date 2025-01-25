import React from "react";
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css';

function SignupForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstNameInput").value;
    const lastName = document.getElementById("lastNameInput").value;
    const email = document.getElementById("emailInput").value;
    const organisation = document.getElementById("organisationInput").value;

    if (firstName && lastName && email && organisation) {
      console.log("Signup successful");
      navigate('/login');
    }
  };

  return (
    <div className="signup-page">
    
      <div className="catmascot">
        <img src="/src/assets/ramcats-mascot.png" alt="Cat paw" className="paw" />
      </div>

      <div className="signup-container">
        <h1>Sign up</h1>
        <p className="subtitle">Walk on keyboard unwrap toilet paper what the heck just happened, something feels fishy.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              id="firstNameInput" 
              placeholder="First Name" 
              required 
            />
            <input 
              type="text" 
              id="lastNameInput" 
              placeholder="Last Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              id="emailInput" 
              placeholder="Email" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="text" 
              id="organisationInput" 
              placeholder="Organisation" 
              required 
            />
          </div>
          <button type="submit" className="submit-btn">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;