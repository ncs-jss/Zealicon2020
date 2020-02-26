import React from "react";
import { Link } from "react-router-dom";
import brochure from "../brochure.pdf";

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
              title="JSSATE Noida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5129585806717!2d77.35659471503591!3d28.614384482425013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce518d2daeab9%3A0x91e181c429938a9b!2sJ.S.S.+Academy+of+Technical+Education%2C+Noida!5e0!3m2!1sen!2sin!4v1550401919693"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: "0", borderRadius: "5px" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-4 pt-2 pb-2 reach_name">
            <h3 className="font_semibold mb-0" style={{ fontSize: "20px " }}>
              Dr. Prashant Chauhan
            </h3>
            <p className="font_light mb-0">Festival Convener</p>
            <a href="mailto:zealicon@jssaten.ac.in" className="text-white">
              zealicon@jssaten.ac.in
            </a>
          </div>
          <div className="col-md-4 pt-2 reach_name">
            <h3 className="font_semibold mb-0" style={{ fontSize: "20px" }}>
              Kushagra Bharadwaj
            </h3>
            <p className="font_light mb-0">Festival Secretary</p>
            <p className="font_light">9411224086</p>
          </div>
          <div className="col-md-4 pt-2 reach_name">
            <h3 className=" mb-0" style={{ fontSize: "20px" }}>
              Devanshu Monga
            </h3>
            <p className="font_light mb-0">Festival Secretary</p>
            <p className="font_light">9899863709</p>
          </div>
        </div>
        <div className="row py-3">
          <div className="d-flex justify-content-center w-100 align-items-center">
            <div>
              <a
                href="https://g.co/kgs/Trr4mb"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <img
                  src="https://i.ibb.co/7kcM6sj/004-groupme.png"
                  alt="004-groupme"
                  border="0"
                  className="social"
                />
              </a>
              <a
                href="https://www.instagram.com/zealicon/"
                target="_blank"
                className="mr-2"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.ibb.co/xYmQRP3/011-instagram.png"
                  alt="011-instagram"
                  border="0"
                  className="social"
                  rel="noopener noreferrer"
                />
              </a>
              <a
                href="https://www.youtube.com/watch?v=zRidlFAR00A"
                className="mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.ibb.co/5FqnCyL/008-youtube.png"
                  alt="008-youtube"
                  border="0"
                  className="social"
                />
              </a>
              <a
                href="https://facebook.com/zealicon"
                target="_blank"
                className="mr-2"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.ibb.co/kQz3Dqp/001-facebook.png"
                  alt="001-facebook"
                  border="0"
                  className="social"
                />
              </a>
              <a href={brochure} target="_blank" className="mr-2" download>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 500"
                  className="social"
                >
                  <g
                    id="Group_6"
                    data-name="Group 6"
                    transform="translate(-654 5507)"
                  >
                    <circle
                      id="Ellipse_1"
                      data-name="Ellipse 1"
                      cx="250"
                      cy="250"
                      r="250"
                      transform="translate(654 -5507)"
                      fill="#fff"
                    />
                    <g
                      id="noun_Save_2209758"
                      transform="translate(1444.505 -4036.5)"
                    >
                      <g
                        id="Group_5"
                        data-name="Group 5"
                        transform="translate(-679.621 -1358.5)"
                      >
                        <path
                          id="Path_6"
                          data-name="Path 6"
                          d="M318.61,270.289v61.4a13.975,13.975,0,0,1-.437,3.406h0a13.186,13.186,0,0,1-12.84,10.569H54.389a13.142,13.142,0,0,1-13.015-11.7,10.346,10.346,0,0,1-.175-2.358V270.2a13.1,13.1,0,0,1,26.2,0v49.176h225.09V270.2a13.094,13.094,0,0,1,22.361-9.259A13.835,13.835,0,0,1,318.61,270.289Z"
                          transform="translate(-41.2 -68.783)"
                        />
                        <path
                          id="Path_7"
                          data-name="Path 7"
                          d="M263.975,181.515,199.6,245.889c-.087.175-.262.262-.349.349a15.169,15.169,0,0,1-8.473,4.28c-.262,0-.524.087-.786.087a9.494,9.494,0,0,1-1.572.087h0l-1.485-.087c-.262,0-.524-.087-.786-.087a14.9,14.9,0,0,1-8.473-4.28l-.349-.349-64.374-64.374a15.317,15.317,0,0,1,21.662-21.662l38.694,38.694V56.785A15.359,15.359,0,0,1,188.6,41.5a15.625,15.625,0,0,1,10.831,4.455,15.1,15.1,0,0,1,4.455,10.831V198.548l38.694-38.694a15.394,15.394,0,0,1,21.662,0A15.644,15.644,0,0,1,263.975,181.515Z"
                          transform="translate(-49.716 -41.5)"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reach;
