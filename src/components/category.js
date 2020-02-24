import React from "react";
import { isMobile } from "../helpers/utils";
import { Link } from "react-router-dom";

class Category extends React.Component {
  render() {
    return (
      <>
        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
        <div className="py-4 category">
          <div className="team-top container-fluid">
            <Link to="/" style={{ zIndex: "999" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 64 64"
              >
                <g className="aaaa" transform="translate(-18 -18)">
                  <g transform="translate(100) rotate(90)">
                    <path
                      className="bbbb"
                      d="M51.718,34.732a2.455,2.455,0,0,0-3.512.014l-11.585,11.8a2,2,0,1,0,2.822,2.828l7.86-7.883c.387-.388.7-.252.7.3v21.75a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2V41.786c0-.553.315-.685.7-.3l7.86,7.883a2,2,0,1,0,2.822-2.828Z"
                      transform="translate(100 99.541) rotate(180)"
                    />
                    <circle
                      className="cccc"
                      cx="30"
                      cy="30"
                      r="30"
                      transform="translate(80 80) rotate(180)"
                    />
                  </g>
                </g>
              </svg>
            </Link>
            <img
              src="https://i.ibb.co/DKcQwp4/Logo-Final.png"
              alt="Logo-Final-1"
              border="0"
              className="logo-image"
            />
          </div>
          <h2 className="text-center text-white">Events Category</h2>
          <div className="category-page my-4">
            <div className="container">
              <div className="row">
                <div className="col-md-4 mt-3">
                  <Link to={`/events/1`}>
                    <div className="event-card event-1">
                      <span>COLORALO</span>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 mt-3">
                  <Link to={`/events/5`}>
                    <div className="event-card event-2">
                      <span>CODERZ</span>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 mt-3">
                  <Link to={`/events/2`}>
                    <div className="event-card event-3">
                      <span>MECHAVOLTZ</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4 mt-3">
                  <Link to={`/events/3`}>
                    <div className="event-card event-4">
                      <span>PLAY IT ON</span>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 mt-3">
                  <Link to={`/events/4`}>
                    <div className="event-card event-5">
                      <span>ROBOTILES</span>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 mt-3">
                  <Link to={`/events/6`}>
                    <div className="event-card event-6">
                      <span>Z-WARS</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Category;
