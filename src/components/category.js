import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { isMobile } from "../helpers/utils";
import { Link } from "react-router-dom";

class Category extends React.Component {
  render() {
    return (
      <div className="py-4 category">
        <div className="team-top container-fluid">
          <Link to="/">
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
        <div className="category-page">
          <OwlCarousel
            className="owl-theme"
            items={isMobile() ? "2" : "3"}
            margin={10}
            nav
            loop
            // autoplay
            center
          >
            <div class="item single-category">
              <img
                src="https://i.ibb.co/RDfnzHw/spirograph-2-0.png "
                className="spiral-image"
              />
              <p className="category-text">COLARO</p>
            </div>
            <div class="item single-category">
              <img
                src="https://i.ibb.co/RDfnzHw/spirograph-2-0.png"
                className="spiral-image"
              />
              <p className="category-text">MECHAVOLTZ</p>
            </div>
            <div class="item single-category">
              <img
                src="https://i.ibb.co/RDfnzHw/spirograph-2-0.png"
                className="spiral-image"
              />
              <p className="category-text">PLAY IT ON</p>
            </div>
            <div class="item single-category">
              <img
                src="https://i.ibb.co/RDfnzHw/spirograph-2-0.png"
                className="spiral-image"
              />
              <p className="category-text">ROBOTILES</p>
            </div>
            <div class="item single-category">
              <img
                src="https://i.ibb.co/RDfnzHw/spirograph-2-0.png"
                className="spiral-image"
              />
              <p className="category-text">Z-WAR</p>
            </div>
            <div class="item single-category">
              <img
                src="https://i.ibb.co/RDfnzHw/spirograph-2-0.png"
                className="spiral-image"
              />
              <p className="category-text">CODERZ</p>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
export default Category;
