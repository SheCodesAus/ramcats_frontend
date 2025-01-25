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
          <div className="signup-form-group">
            <input 
              type="text" 
              id="usernameInput" 
              placeholder="Username" 
              defaultValue="john_doe"
              required 
            />
            <input 
              type="password" 
              id="passwordInput" 
              placeholder="Password" 
              defaultValue="securepassword123"
              required 
            />
            <input 
              type="email" 
              id="emailInput" 
              placeholder="Email" 
              defaultValue="john_doe@example.com"
              required 
            />
            <input 
              type="text" 
              id="firstNameInput" 
              placeholder="First Name" 
              defaultValue="John"
              required 
            />
            <input 
              type="text" 
              id="lastNameInput" 
              placeholder="Last Name" 
              defaultValue="Doe"
              required 
            />
            <input 
              type="text" 
              id="organisationNameInput" 
              placeholder="Organisation Name" 
              defaultValue="Tech Innovators Ltd."
              required 
            />
            <input 
              type="url" 
              id="organisationImageInput" 
              placeholder="Organisation Image URL" 
              defaultValue="https://example.com/logo.png"
              required 
            />
            <input 
              type="url" 
              id="organisationWebsiteInput" 
              placeholder="Organisation Website" 
              defaultValue="https://techinnovators.com"
              required 
            />
            <textarea 
              id="organisationDescriptionInput" 
              placeholder="Organisation Description" 
              defaultValue="A leading tech solutions provider."
              required 
            />
            {/* <input 
              type="text" 
              id="userTypeInput" 
              placeholder="User Type" 
              defaultValue="Organisation"
              required 
            /> */}
          </div>
          <button type="submit" className="submit-btn">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;