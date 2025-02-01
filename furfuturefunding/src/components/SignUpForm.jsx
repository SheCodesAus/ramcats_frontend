import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import postSignup from "../api/post-signup";
import './SignUpForm.css';

function SignupForm() {
  const navigate = useNavigate();

  const [inputs, setInputs, selectedValue, setSelectedValue] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    user_type: '',
    name: '',
    logo: '',
    website: '',
    description: '',
  });


  const handleSelect = (value) => { setSelectedValue(value); }; 

  const handleChange = (event) => {
    console.log(event.target.id) 
    const id = event.target.id;
      const value = event.target.value;
      setInputs(values => ({...values, [id]: value}))
  };
    
    const handleSubmit= async (event) => {
      event.preventDefault();
      try {
          const result = await postSignup(inputs);
          console.log("Success:", result);
          navigate("/login")
      }   catch (error) {
          console.error("Signup failed:", error)    
      }}
    

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="catmascot">
          <img src="/src/img/ramcats-mascot.png" alt="Cat paw" className="paw" />
        </div>
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="signup-form-group">
          <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Create a username" 
              value={inputs.username}
                onChange={handleChange}
              required 
            />
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Create a password" 
              value={inputs.password}
                onChange={handleChange}
              required 
            />
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              value={inputs.email}
                onChange={handleChange}
              required 
            />
            <label htmlFor="first_name">Given name:</label>
            <input 
              type="text" 
              id="first_name" 
              placeholder="Enter your given name" 
              value={inputs.first_name}
                onChange={handleChange}
              required 
            />
            <label htmlFor="last_name">Family name:</label>
            <input 
              type="text" 
              id="last_name" 
              placeholder="Enter your family name" 
              value={inputs.last_name}
                onChange={handleChange}
              required 
            />
            <label htmlFor="name">Organisation name:</label>            
            <input 
              type="text" 
              id="name" 
              placeholder="Enter your organisation name" 
              value={inputs.name}
                onChange={handleChange}
              required 
            />
            <label htmlFor="logo">Organisation logo:</label>            
            <input 
              type="url" 
              id="logo" 
              placeholder="Provide a URL for your organisation's logo" 
              value={inputs.logo}
                onChange={handleChange}
              required 
            />
            <label htmlFor="website">Organisation website:</label>             
            <input 
              type="url" 
              id="website" 
              placeholder="Provide the URL for your organisation's website" 
              value={inputs.website}
                onChange={handleChange}
              required 
            />
            <label htmlFor="description">Description of organisation:</label>             
            <textarea 
              id="description" 
              placeholder="Provide a brief description of your organisation" 
              value={inputs.description}
                onChange={handleChange}
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