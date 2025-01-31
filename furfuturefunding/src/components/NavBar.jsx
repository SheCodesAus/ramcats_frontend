// NavBar.jsx
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";
import useAuth from "../hooks/use-auth";

function NavBar() {
  const { auth, setAuth } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user_id");
    setAuth({ token: null });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo-container">
            <Link to="/">
              <img
                className="logo-nav desktop-logo"
                src="src/assets/logo_typography.png"
                alt="FurFuture Funding Logo"
              />
              <img
                className="logo-nav mobile-logo"
                src="src/assets/typoicon.png"
                alt="FurFuture Funding Logo Mobile"
              />
            </Link>
          </div>

          <button
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className={`nav-links ${isOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                {auth.token ? (
                  <Link to="/" onClick={handleLogout}>
                    Log Out
                  </Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>

              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                {auth.token ? (
                  <Link to="/create-opportunity">Create An Opportunity</Link>
                ) : null}
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default NavBar;
