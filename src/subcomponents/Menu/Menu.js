import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/">
        <img
          src="https://i.ibb.co/p4JQxXV/Logo-Final-1-2x.png"
          alt="Logo-Final-1"
          border="0"
          className="logo-image-mobile"
        />
      </Link>
      <Link to="/team">Team</Link>
      <Link to="/team">Team</Link>
      <Link to="/team">Team</Link>
      <Link to="/team">Team</Link>
      <Link to="/team">Team</Link>
      <Link to="/team">Team</Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
