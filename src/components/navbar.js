import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="desktop-navbar">
        <ul>
          <li>
            <Link to="/team">
              <span className="navbar-link">TEAM</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <span className="navbar-link">SPONSORS</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <span className="navbar-link">REGISTER</span>
            </Link>
          </li>
        </ul>

        <li>
          <Link to="/">
            <img
              src="https://i.ibb.co/p4JQxXV/Logo-Final-1-2x.png"
              alt="Logo-Final-1"
              border="0"
              className="logo-image"
            />
          </Link>
        </li>

        <ul>
          <li>
            <Link to="/team">
              <span className="navbar-link">EVENTS</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <span className="navbar-link">PRONITES</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <span className="navbar-link">ABOUT</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
