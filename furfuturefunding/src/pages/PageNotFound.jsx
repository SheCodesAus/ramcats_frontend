import React from "react";
import Logo from "../img/furfuturefunding_logo.png";
import { Link } from "react-router-dom";

function PageNotFound() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1200px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
  };

  const imageContainerStyle = {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "30px",
  };

  const logoStyle = {
    maxWidth: "200px",
    height: "auto",
  };

  const textContainerStyle = {
    flex: "2",
  };

  const titleStyle = {
    fontSize: "36px",
    fontWeight: "700",
    color: "#333",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    fontSize: "18px",
    color: "#666",
    marginBottom: "20px",
  };

  const messageStyle = {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.5",
  };

  const linkStyle = {
    color: "#007bff",
    textDecoration: "none",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={imageContainerStyle}>
          <img src={Logo} alt="404 Logo" style={logoStyle} />
        </div>
        <div style={textContainerStyle}>
          <h1 style={titleStyle}>404 Page Not Found</h1>
          <p style={subtitleStyle}>Um... This is awkward..</p>
          <p style={messageStyle}>
            We tried really hard but couldn't find the page you are looking for.
            You may find what you are looking for in the{" "}
            <Link
              to="/"
              style={linkStyle}
              onMouseEnter={(e) =>
                (e.target.style.textDecoration = linkHoverStyle.textDecoration)
              }
              onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
            >
              Home Page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
