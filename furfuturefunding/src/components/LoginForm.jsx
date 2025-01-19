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
}

export default LoginForm;
