import React from "react";
import { Link } from "react-router-dom";
const Reach = () => {
  return (
    <div className="reach pt-4">
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
      <div className="container">
        <h2 className="text-center py-2 pb-3">Reach Us</h2>
        <div className="row">
          <div className="col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5129585806717!2d77.35659471503591!3d28.614384482425013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce518d2daeab9%3A0x91e181c429938a9b!2sJ.S.S.+Academy+of+Technical+Education%2C+Noida!5e0!3m2!1sen!2sin!4v1550401919693"
              width="100%"
              height="400"
              frameborder="0"
              style={{ border: "0", borderRadius: "5px" }}
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-4 reach_name">
            <h3 className="font_semibold mb-0" style={{ fontSize: "20px " }}>
              Dr. Prashant Chauhan
            </h3>
            <p className="font_light mb-0">Festival Convener</p>
            <a href="mailto:zealicon@jssaten.ac.in" className="text-white">
              zealicon@jssaten.ac.in
            </a>
          </div>
          <div className="col-md-4 reach_name">
            <h3 className="font_semibold mb-0" style={{ fontSize: "20px" }}>
              Kushagra Bharadwaj
            </h3>
            <p className="font_light mb-0">Festival Secretary</p>
            <p className="font_light">9411224086</p>
          </div>
          <div className="col-md-4 reach_name">
            <h3 className="font_semibold mb-0" style={{ fontSize: "20px" }}>
              Devanshu Monga
            </h3>
            <p className="font_light mb-0">Festival Secretary</p>
            <p className="font_light">9899863709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reach;
