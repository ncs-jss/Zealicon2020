import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  const ctc = [
    {
      img: "",
      name: "Devansh Chaudhary",
      post: "Design Head"
    },
    {
      img: "",
      name: "Devansh Chaudhary",
      post: "Design Head"
    },
    {
      img: "",
      name: "Devansh Chaudhary",
      post: "Design Head"
    },
    {
      img: "",
      name: "Devansh Chaudhary",
      post: "Design Head"
    },
    {
      img: "",
      name: "Devansh Chaudhary",
      post: "Design Head"
    },
    {
      img: "",
      name: "Devansh Chaudhary",
      post: "Design Head"
    },
    {
      img: "",
      name: "Devansh Chaudhary",
      post: "Design Head"
    },
    {
      img: "",
      name: "Devansh Chaudhary",
      post: "Design Head"
    },
    {
      img: "",
      name: "Devansh Chaudhary",
      post: "Design Head"
    },
    {
      img: "",
      name: "Devansh Chaudhary",
      post: "Design Head"
    },
    {
      img: "",
      name: "Devansh Chaudhary",
      post: "Design Head"
    }
  ];
  return (
    <div className="team pt-5">
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
          src="https://i.ibb.co/p4JQxXV/Logo-Final-1-2x.png"
          alt="Logo-Final-1"
          border="0"
          className="logo-image"
        />
      </div>
      <div className="container mt-3">
        <h2 className="text-center mb-5">ABOUT ZEALICON</h2>
        <p className="text-justify about-content">
          Zealicon is the annual techno-cultural festival of JSSATE, Noida.
          Dedicated to the celebration of creativity and science, it is a
          stimulating event brimming with youthful dynamism. It transforms the
          campus into a veritable kaleidoscope of people. Involving multifarious
          exciting events from technical scratch to cultural zeal. A platform
          for all the creative minds to express their ideas in the form of
          events including band performances, discussions, film screenings that
          are spread over four days.
        </p>
        <p className="text-justify about-content">
          Apart from the exuberant cultural events, Zealicon is also known for
          its mind boggling technical events that creates an ambience for the
          technocrats. Zealicon 2019 will cover the aspects of hysterical face
          of literature along with popular arts, science and technology. This
          edition of Zealicon promises all the trademarks of the earlier
          versions. A plethora of events where academicians will vouch out their
          intellect and artists will showcase the best of art. Projecting the
          fictitious gesture onto the real world, Zealicon will act as a
          connecting link between the fantasy and reality. Creating an aura of
          avidity and togetherness, We hope that Zealicon 2019 will turn out to
          be a memorable experience for you !
        </p>
      </div>
    </div>
  );
};

export default Team;
