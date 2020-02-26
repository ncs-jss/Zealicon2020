import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;

  const show = () => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() {
      x.className = x.className.replace("show", "");
    }, 3000);
  };

  return (
    <>
      <div id="snackbar" style={{ zIndex: "999" }}>
        Will be updated Soon!!
      </div>

      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <Link to="/">
          <img
            src="https://i.ibb.co/DKcQwp4/Logo-Final.png"
            alt="Logo-Final-1"
            border="0"
            className="logo-image-mobile"
          />
        </Link>
        <Link to="/team">Team</Link>
        <Link to="#" onClick={show}>
          Sponsors
        </Link>
        <Link to="#" onClick={show}>
          Register
        </Link>
        <Link to="/events">Events</Link>
        <Link to="/reach">Reach Us</Link>
        <Link to="/about">About</Link>
      </StyledMenu>
    </>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
