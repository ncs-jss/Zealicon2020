import React from "react";
import { Link } from "react-router-dom";
const Team = () => {
  const ctc = [
    {
      img: "https://i.ibb.co/92ptbZ5/p29.png",
      name: "Kushagra Bhardwaj",
      post: "Festival Secretary"
    },
    {
      img: "https://i.ibb.co/t88Q3cD/p25.png",
      name: "Devanshu Monga",
      post: "Festival Secretary"
    },
    {
      img: "",
      name: "Raman Khatri",
      post: "Festival Co-Secretary"
    },
    {
      img: "https://i.ibb.co/CKPjKgD/p31.png",
      name: "Suryansh Udit",
      post: "Festival Co-Secretary"
    },
    {
      img: "https://i.ibb.co/PGzVfDp/p14-1.png",
      name: "Kunal Vishnoi",
      post: "Technical Head"
    },
    {
      img: "https://i.ibb.co/QMzBGvZ/p26-1.png",
      name: "Shubham Rana",
      post: "Sponsorship Head"
    },
    {
      img: "https://i.ibb.co/DfDjnDH/p8.png",
      name: "Nancy Poddar",
      post: "Deputy Sponsorship Head"
    },
    {
      img: "https://i.ibb.co/JycRWyd/p27.png",
      name: "Karan Bains",
      post: "Artist & Stage Head "
    },
    {
      img: "https://i.ibb.co/1zS0Ctm/p5.png",
      name: "Abhinav Singh",
      post: "Cultural Head"
    },
    {
      img: "https://i.ibb.co/9rKSjcP/p28.png",
      name: "Shubham Singh",
      post: "Security Head"
    },
    {
      img: "https://i.ibb.co/g9wkHPX/p1.png",
      name: "Akarsh Neeraj",
      post: "Media & Photography Head"
    },
    {
      img: "https://i.ibb.co/JQRVXNP/p13.png",
      name: "Kamal Meghani",
      post: "Management Head "
    },
    ,
    {
      img: "https://i.ibb.co/cXKJMP9/pp8.png",
      name: "Prakhar Agnihotri",
      post: "Deputy Security Head"
    },
    {
      img: "https://i.ibb.co/L1vQm3J/p7.png",
      name: "Amit Singh",
      post: "Creative Head  "
    },
    {
      img: "https://i.ibb.co/9cTR9q2/p24.png",
      name: "Raja Yadav",
      post: "Co-Creative Head  "
    },

    {
      img: "https://i.ibb.co/qd26SNp/p10.png",
      name: "Simran Gupta",
      post: "Student Welfare & Outreach Head"
    },
    {
      img: "",
      name: "Piyush Kumar",
      post: "Scheduling Head  "
    },
    {
      img: "https://i.ibb.co/n0gJWJ0/p2.png",
      name: "Vishal Dixit",
      post: "Marketing Head"
    },
    {
      img: "https://i.ibb.co/C79Kbdv/p6.png",
      name: "Ishita",
      post: "Marketing Head"
    },
    {
      img: "",
      name: "Akriti Sundaram",
      post: "P.A. System Head"
    },
    {
      img: "https://i.ibb.co/4VppMwn/p9.png",
      name: "Tijil Shandilya",
      post: "Resource Head"
    }
  ];

  const team = [
    {
      img: "https://i.ibb.co/rMmkWwQ/p10-1-1.png",
      name: "Rohit Jakhmola",
      post: "Tech Lead"
    },
    {
      img: "https://i.ibb.co/tc7R6Ct/pp7.png",
      name: "Shobhit Agarwal",
      post: "Tech Lead"
    },
    {
      img: "https://i.ibb.co/kQNRLCV/p16.png",
      name: "Anant Jain",
      post: "Tech Lead"
    },
    {
      img: "https://i.ibb.co/cTW9Wzv/pp6.png",
      name: "Shubham Singh",
      post: "Design Lead"
    },
    {
      img: "https://i.ibb.co/C2V3TDz/p30.png",
      name: "Kumar Rohit",
      post: "Design Lead"
    },
    {
      img: "https://i.ibb.co/82K4TW7/p9.png",
      name: "Sourabh Singh",
      post: "Developer"
    },
    {
      img: "https://i.ibb.co/XJxBLD7/p17.png",
      name: "Shubham Pathak",
      post: "App Developer"
    },
    {
      img: "https://i.ibb.co/XY4H8Tm/p15.png",
      name: "Devansh Chaudhary",
      post: "Designer"
    },
    {
      img: "https://i.ibb.co/Jc2GqXS/p12.png",
      name: "Viral Luke",
      post: "Designer"
    },
    {
      img: "https://i.ibb.co/qsRj2yg/p20.png",
      name: "Saksham",
      post: "Developer"
    },
    {
      img: "https://i.ibb.co/LvKc02H/p23.png",
      name: "Rajat Verma",
      post: "Developer"
    },
    {
      img: "https://i.ibb.co/NpVrvsx/p21.png",
      name: "Pranav Negi",
      post: "Designer "
    },
    {
      img: "https://i.ibb.co/6mMf4SX/p22.png",
      name: "Dheeraj Kotwani",
      post: "App Developer"
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
          src="https://i.ibb.co/DKcQwp4/Logo-Final.png"
          alt="Logo-Final-1"
          border="0"
          className="logo-image"
        />
      </div>
      <div className="container ">
        <h2 className="text-center mb-3">OUR TEAM</h2>
        <div className="team-heading">
          <hr className="d-none d-md-flex" />
          <h3>Management Commitee</h3>
          <hr className="d-none d-md-flex" />
        </div>
        <div className="row mt-5">
          <div className="offset-md-3 text-center col-md-3 col-6">
            <img
              src="https://i.ibb.co/9ZYPZfH/p4.png"
              alt="p4"
              border="0"
              className="team-image"
              style={{ width: "100%" }}
            />
            <p className="font-weight-bold mt-2 mb-0">
              Dr. Gurulingappa M Patil
            </p>
            <span>Chairman</span>
          </div>

          <div className="col-md-3 text-center col-6">
            <img
              src="https://i.ibb.co/HCr2wd2/p3.png"
              alt="p4"
              border="0"
              className="team-image"
              style={{ width: "100%" }}
            />
            <p className="font-weight-bold mt-2 mb-0">Dr. Prashant Chauhan</p>
            <span>Convener</span>
          </div>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="team-heading">
          <hr className="d-none d-md-flex" />
          <h3>Core Team Commitee</h3>
          <hr className="d-none d-md-flex" />
        </div>
      </div>
      <div className="container-fluid padding-ctc my-5">
        <div className="row">
          {ctc.map((data, index) => {
            return (
              <div className="col-md-2 mt-2 mb-3 col-6 text-center" key={index}>
                {data.img.length > 2 ? (
                  <img
                    src={data.img}
                    style={{ width: "100%" }}
                    className="team-image"
                    alt="team"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 220.278 238.155"
                    className="team-image"
                  >
                    <g transform="translate(2.508 2.512)">
                      <g transform="translate(0 0)">
                        <path
                          className="a1"
                          d="M235.556,88.458c-.145,57.312-62.031,164.826-104.2,164.737S27.859,145.242,28,87.93c.128-48.347,46.619-60.487,103.936-60.342S235.65,45.558,235.556,88.458Z"
                          transform="translate(-17.787 -17.551)"
                        />
                        <path
                          className="b1"
                          d="M188.395,27.183c30.692,48.4,36.33,172.332.723,194.923s-145.312-35.369-176-83.771C-12.779,97.507,19.9,62.271,68.3,31.578S165.421-9.045,188.395,27.183Z"
                          transform="translate(-3.998 -4.002)"
                        />
                      </g>
                    </g>
                  </svg>
                )}
                <p className="font-weight-bold mt-3 mb-0">{data.name}</p>
                <span className="mb-1 fest-post">{data.post}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mt-5 ">
        <div className="team-heading">
          <hr className="d-none d-md-flex" />
          <h3>Technical Team</h3>
          <hr className="d-none d-md-flex" />
        </div>
      </div>
      <div className="container-fluid padding-ctc my-5">
        <div className="row">
          {team.map((data, index) => {
            return (
              <div className="col-md-2 mt-2 mb-3 col-6 text-center" key={index}>
                {data.img.length > 2 ? (
                  <img
                    src={data.img}
                    style={{ width: "100%" }}
                    className="team-image"
                    alt="team"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 220.278 238.155"
                    className="team-image"
                  >
                    <g transform="translate(2.508 2.512)">
                      <g transform="translate(0 0)">
                        <path
                          className="a1"
                          d="M235.556,88.458c-.145,57.312-62.031,164.826-104.2,164.737S27.859,145.242,28,87.93c.128-48.347,46.619-60.487,103.936-60.342S235.65,45.558,235.556,88.458Z"
                          transform="translate(-17.787 -17.551)"
                        />
                        <path
                          className="b1"
                          d="M188.395,27.183c30.692,48.4,36.33,172.332.723,194.923s-145.312-35.369-176-83.771C-12.779,97.507,19.9,62.271,68.3,31.578S165.421-9.045,188.395,27.183Z"
                          transform="translate(-3.998 -4.002)"
                        />
                      </g>
                    </g>
                  </svg>
                )}
                <p className="font-weight-bold mt-3 mb-0">{data.name}</p>
                <span className="mb-1 fest-post">{data.post}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
