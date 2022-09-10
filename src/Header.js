import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="title">
        Fun With Triangles
      </Link>
      <div className="navLinks">
        <Link className="links" to="/isTriangle">
          Is Triangle?
        </Link>
        <Link className="links" to="/quiz">
          Quiz
        </Link>
        <Link className="links" to="/calculateHypotenuse">
          Calculate Hypotenuse
        </Link>
        <Link className="links" to="/areaOfTriangle">
          Area of Triangle
        </Link>
      </div>
    </div>
  );
}

export default Header;
