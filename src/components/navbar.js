import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const show = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 3000);
  };
  return (
    <>
      <div id="snackbar">Will be updated Soon!!</div>
      <header>
        <nav className="desktop-navbar">
          <ul>
            <li>
              <Link to="/team">
                <span className="navbar-link">TEAM</span>
              </Link>
            </li>
            <li>
              <Link onClick={show}>
                <span className="navbar-link">SPONSORS</span>
              </Link>
            </li>
            <li>
              <Link href="#" onClick={show}>
                <span className="navbar-link">REGISTER</span>
              </Link>
            </li>
          </ul>

          <li>
            <Link to="/">
              <img
                src="https://i.ibb.co/DKcQwp4/Logo-Final.png"
                alt="Logo-Final-1"
                border="0"
                className="logo-image"
              />
            </Link>
          </li>

          <ul>
            <li>
              <Link to="/events">
                <span className="navbar-link">EVENTS</span>
              </Link>
            </li>
            <li>
              <Link to="/reach">
                <span className="navbar-link">REACH US</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="navbar-link">ABOUT</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
