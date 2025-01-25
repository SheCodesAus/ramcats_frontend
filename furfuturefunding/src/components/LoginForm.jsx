
// LoginForm.js
import React from 'react';
import { useState } from 'react';
import postLogin from '../api/post-login';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/use-auth';
import './LoginForm.css';

function LoginForm() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [ credentials, setCredentials] = useState ({
    username: "",
    password: "",
  })

  const handleChange = (event) => {
    const { id, value } = event.target;
    console.log({id});
    console.log({value});
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
    console.log({credentials})
  };

  const handleSubmit = (event) => {
    console.log("button press")
       event.preventDefault();
       console.log({event})
              if (credentials.username && credentials.password) {
           postLogin(
               credentials.username,
               credentials.password
           ).then((response) => {
            window.localStorage.setItem("token", response.token);
               console.log(response);
            setAuth({ 
                token: response.token, 
            }); navigate("/"); 
        }).catch((error) => { 
            console.error('Login failed:', error); }); } };


  return (
    <div className="login-background">
      <div className="cat-container">
        <img src="src/assets/14.png" alt="Cat" className="cat-icon" />
      </div>
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              id="username" 
              placeholder="Username" 
              onChange={handleChange}
              />
          {/* </div>
          <div className="form-group"> */}
            <input 
            type="password" 
            id="password" 
            placeholder="Password" 
            onChange={handleChange}
            />
          </div>
          <button 
            type="submit" 
            className="primary-button"
            >
            Log in
          </button>
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
