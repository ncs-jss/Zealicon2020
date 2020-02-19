import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {open ? (
        <>
          <div
            style={{
              position: "fixed",
              trasition: "all 0.3s ease",
              bottom: "10px",
              left: "10px"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29.148"
              height="29.151"
              viewBox="0 0 29.148 29.151"
            >
              <g transform="translate(-418.4 -415.4)">
                <path
                  className="a"
                  d="M447.531,429.931v8.14a6.329,6.329,0,0,1-6.356,6.46c-5.456.017-10.894.035-16.349,0a6.367,6.367,0,0,1-6.425-6.512V421.843a6.384,6.384,0,0,1,6.477-6.443H441.14a6.339,6.339,0,0,1,6.408,6.408v4.07C447.548,427.229,447.531,428.58,447.531,429.931Zm-3.862.035v-4.59a6.321,6.321,0,0,0-6.287-6.443q-4.416-.052-8.833,0a6.383,6.383,0,0,0-6.3,6.356c-.017,3.152-.017,6.287,0,9.439a6.351,6.351,0,0,0,6.27,6.287c3,.017,5.992.017,9.006,0a6.313,6.313,0,0,0,6.148-6.218Z"
                />
                <path
                  className="a"
                  d="M451.211,455.434c0-1.7-.052-3.412.017-5.109a4.382,4.382,0,0,1,4.26-4.087c3.083-.017,6.166-.017,9.266,0a4.327,4.327,0,0,1,4.209,3.931q.13,5.326,0,10.634a4.258,4.258,0,0,1-4.1,3.845c-3.152.017-6.287.017-9.439,0a4.323,4.323,0,0,1-4.191-4.035C451.159,458.9,451.211,457.166,451.211,455.434Zm8.85-5.837c-2.979-.26-5.94,2.633-5.871,5.906a5.9,5.9,0,1,0,11.777-.5A5.506,5.506,0,0,0,460.061,449.6Zm5.992-1.559a1.416,1.416,0,0,0-1.437,1.4A1.466,1.466,0,0,0,466,450.914a1.482,1.482,0,0,0,1.489-1.455A1.43,1.43,0,0,0,466.053,448.039Z"
                  transform="translate(-27.113 -25.486)"
                />
                <path
                  className="a"
                  d="M484.739,485a3.632,3.632,0,0,1-3.672-3.81,3.782,3.782,0,0,1,3.6-3.689,3.6,3.6,0,0,1,3.914,3.689A3.738,3.738,0,0,1,484.739,485Z"
                  transform="translate(-51.808 -51.344)"
                />
              </g>
            </svg>
          </div>
          <div
            style={{
              position: "fixed",

              bottom: "10px",
              right: "10px"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.689"
              height="28.835"
              viewBox="0 0 28.689 28.835"
            >
              <g transform="translate(-10 -10)">
                <path
                  className="aa"
                  d="M38.689,14.316V34.374a4.317,4.317,0,0,1-4.316,4.316H27.979V27.53h3.088l.413-3.89h-3.5V21.695c0-1.021.1-1.556,1.544-1.556h1.933v-3.89H28.368c-3.708,0-5.021,1.884-5.021,5.069v2.334h-2.31v3.89h2.31V38.689H14.316A4.317,4.317,0,0,1,10,34.374V14.316A4.317,4.317,0,0,1,14.316,10H34.374A4.317,4.317,0,0,1,38.689,14.316Z"
                />
                <rect
                  className="b"
                  width="4.632"
                  height="0.146"
                  transform="translate(23.348 38.689)"
                />
              </g>
            </svg>
          </div>
        </>
      ) : null}
      <Link to="/">
        <img
          src="https://i.ibb.co/DKcQwp4/Logo-Final.png"
          alt="Logo-Final-1"
          border="0"
          className="logo-image-mobile"
        />
      </Link>
      <Link to="/team">Team</Link>
      <Link to="/">Sponsors</Link>
      <Link to="/">Register</Link>
      <Link to="/categories">Events</Link>
      <Link to="/">Pronites</Link>
      <Link to="/about">About</Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

export default Menu;
