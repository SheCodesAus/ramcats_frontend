import React from "react";

function LoginForm() {
  document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const rememberCheckbox = document.getElementById("rememberCheckbox");
    const spinnerWrapper = document.getElementById("spinnerWrapper");

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = emailInput.value;
      const password = passwordInput.value;
      const rememberMe = rememberCheckbox.checked;

      // Perform login validation here
      if (email && password) {
        // Show loading spinner
        spinnerWrapper.classList.add("active");

        // Simulate login request
        setTimeout(function () {
          // Hide loading spinner
          spinnerWrapper.classList.remove("active");

          // Perform login success or failure actions here
          console.log("Login successful");
          console.log("Email:", email);
          console.log("Password:", password);
          console.log("Remember Me:", rememberMe);
        }, 2000);
      }
    });
  });
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="emailInput" placeholder="Enter your email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="passwordInput"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <label htmlFor="RememberMe">Remember Me?</label>
        <input
          type="checkbox"
          id="rememberCheckbox"
          placeholder="Remember Me?"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
