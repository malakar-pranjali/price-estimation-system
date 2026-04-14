import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#2c2c2c", padding: "10px" }}>
      <div className="container">

        <Link to="/home" style={linkStyle}>Dashboard</Link>
        <Link to="/form" style={linkStyle}>Form</Link>
        <Link to="/result" style={linkStyle}>Result</Link>

      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  marginRight: "15px",
  textDecoration: "none",
  fontWeight: "bold",
};

export default Navbar;