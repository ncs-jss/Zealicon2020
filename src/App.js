import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import main from "./main.gif";
import { isMobile } from "./helpers/utils";
import SideBar from "./components/sidebar";
class App extends React.Component {
  state = {
    images: [
      isMobile()
        ? "https://i.ibb.co/L9GrWzS/phone3.png"
        : "https://i.ibb.co/hxN2B9f/4-1.png",
      isMobile()
        ? "https://i.ibb.co/ZKRsgk6/phone5.png"
        : "https://i.ibb.co/VxVgkDK/3-1.png",
      isMobile()
        ? "https://i.ibb.co/k5j1FMJ/phone1.png"
        : "https://i.ibb.co/1LM5Xnv/2.png",
      isMobile()
        ? "https://i.ibb.co/8DqYSmW/phone4.png"
        : "https://i.ibb.co/FKpK1K5/1-1.png",
      isMobile()
        ? "https://i.ibb.co/R93yCZc/phone2.png"
        : "https://i.ibb.co/MPfYbDg/5-1.png"
    ],
    selectedImage: isMobile()
      ? "https://i.ibb.co/L9GrWzS/phone3.png"
      : "https://i.ibb.co/hxN2B9f/4-1.png",
    in: 0,
    play: false,
    sound: true
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        if (prevState.in === 3) {
          return {
            in: 0,
            selectedImage: this.state.images[0]
          };
        } else {
          return {
            in: prevState.in + 1,
            selectedImage: this.state.images[prevState.in + 1]
          };
        }
      });
    }, 5000);
  }
  render() {
    return (
      <>
        {isMobile() ? <SideBar /> : <NavBar />}

        <div className="bottom-bar">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              <div className="col-md-1 px-0 col-2 text-center">
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
              <div className="col-4 d-none d-md-block">
                <hr className="bottom-hr" />
              </div>
              <div className="col-md-2 col-8 text-center px-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.963"
                  height="23.5"
                  viewBox="0 0 20.963 23.5"
                  className="mr-3"
                >
                  <path
                    className="a"
                    d="M70.218,1.268A1.313,1.313,0,0,1,71.486,0a1.268,1.268,0,0,1,1.268,1.268V13.753l2.737-2.6a1.275,1.275,0,1,1,1.736,1.869l-4.874,4.607a1.25,1.25,0,0,1-1.736,0l-4.874-4.607a1.269,1.269,0,0,1,0-1.8,1.193,1.193,0,0,1,1.736-.067l2.737,2.6Z"
                    transform="translate(-61.005)"
                  />
                  <path
                    className="a"
                    d="M18.426,230.268A1.268,1.268,0,0,1,19.695,229a1.228,1.228,0,0,1,1.268,1.268v5.608a1.284,1.284,0,0,1-1.268,1.335H1.268A1.327,1.327,0,0,1,0,235.876v-5.608A1.268,1.268,0,0,1,1.268,229a1.228,1.228,0,0,1,1.268,1.268v4.339H18.426Z"
                    transform="translate(0 -213.712)"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.564"
                  height="23.5"
                  viewBox="0 0 19.564 23.5"
                  className="mr-3"
                >
                  <path
                    className="a"
                    d="M190.7,184.805,176,173.345,190.7,162Z"
                    transform="translate(-171.138 -161.653)"
                  />
                  <path
                    className="a"
                    d="M318.621,182.5A1.583,1.583,0,0,1,317,180.879V160.5a1.56,1.56,0,0,1,1.621-1.5,1.638,1.638,0,0,1,1.621,1.5v20.374A1.656,1.656,0,0,1,318.621,182.5Z"
                    transform="translate(-317 -159)"
                  />
                </svg>
                {!this.state.play ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={isMobile() ? "37" : "47"}
                    height={isMobile() ? "37" : "47"}
                    viewBox="0 0 47 47"
                    className="mr-3"
                  >
                    <g transform="translate(-0.2)">
                      <path
                        className="aaa"
                        d="M.2,23.545A23.5,23.5,0,1,1,23.745,47,23.562,23.562,0,0,1,.2,23.545Zm1.894,0a21.606,21.606,0,1,1,21.651,21.56A21.6,21.6,0,0,1,2.094,23.545Z"
                      />
                      <path
                        className="aaa"
                        d="M189.2,111l17.393,13.559L189.2,137.973Z"
                        transform="translate(-171.95 -100.987)"
                      />
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={isMobile() ? "30" : "40"}
                    height={isMobile() ? "30" : "40"}
                    className="mr-3"
                    viewBox="0 0 521 551.3"
                    xmlSpace="preserve"
                  >
                    <path
                      className="st0"
                      d="M0,259.8c0-144,117-261,261-261s260,117,260,261s-116,260-260,260S0,403.8,0,259.8z M21,259.8
  c0-133,107-240,240-240c132,0,239,107,239,240c0,132-107,239-239,239C128,498.8,21,391.8,21,259.8z"
                    />
                    <g>
                      <path
                        className="st0"
                        d="M335,125.5c13,0,22.8,7.9,22.8,18.4v231.9c0,9.2-9.8,17.1-22.8,17.1c-11.4,0-22.8-7.9-22.8-17.1V144
    C312.2,133.4,323.6,125.5,335,125.5z"
                      />
                      <path
                        className="st0"
                        d="M186,125.5c13,0,22.8,7.9,22.8,18.4v231.9c0,9.2-9.8,17.1-22.8,17.1c-11.4,0-22.8-7.9-22.8-17.1V144
    C163.2,133.4,174.6,125.5,186,125.5z"
                      />
                    </g>
                  </svg>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.564"
                  height="23.5"
                  viewBox="0 0 19.564 23.5"
                  className="mr-3"
                >
                  <g transform="translate(-176 -159)">
                    <path
                      className="aa"
                      d="M176,162l14.7,11.461L176,184.805Z"
                      transform="translate(0 -2.653)"
                    />
                    <path
                      className="aa"
                      d="M318.621,159a1.583,1.583,0,0,1,1.621,1.621V181a1.56,1.56,0,0,1-1.621,1.5A1.638,1.638,0,0,1,317,181V160.621A1.656,1.656,0,0,1,318.621,159Z"
                      transform="translate(-124.677)"
                    />
                  </g>
                </svg>
                {this.state.sound ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24.111"
                    height="23.5"
                    viewBox="0 0 24.111 23.5"
                  >
                    <g transform="translate(-15.7 -24.992)">
                      <path
                        className="aaa"
                        d="M56.582,36.792a.784.784,0,0,0-1.221,0,1.017,1.017,0,0,0,0,1.362,6.6,6.6,0,0,1,1.657,4.475A6.814,6.814,0,0,1,55.362,47.1a1.017,1.017,0,0,0,0,1.362.784.784,0,0,0,1.221,0,8.906,8.906,0,0,0,0-11.675Z"
                        transform="translate(-22.222 -5.91)"
                      />
                      <path
                        className="aaa"
                        d="M61.882,31.492a.784.784,0,0,0-1.221,0,1.017,1.017,0,0,0,0,1.362,10.818,10.818,0,0,1,0,14.107,1.017,1.017,0,0,0,0,1.362.784.784,0,0,0,1.221,0,12.85,12.85,0,0,0,0-16.831Z"
                        transform="translate(-25.211 -3.188)"
                      />
                      <g transform="translate(15.7 24.992)">
                        <path
                          className="aaa"
                          d="M28.867,48.492a1.922,1.922,0,0,1-1.308-.486l-5.93-5.059H17.793A2.167,2.167,0,0,1,15.7,40.708V32.779a2.165,2.165,0,0,1,2.093-2.238H21.63l5.93-5.059a2.071,2.071,0,0,1,2.224-.292,2.259,2.259,0,0,1,1.177,2.043v19.02A2.259,2.259,0,0,1,29.783,48.3,3.086,3.086,0,0,1,28.867,48.492ZM17.793,32.779h0V40.66h4.229a1,1,0,0,1,.654.243l6.191,5.3V27.233l-6.191,5.3a1.1,1.1,0,0,1-.654.243Z"
                          transform="translate(-15.7 -24.992)"
                        />
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 90.7 85.3"
                    width="29.111"
                    height="23.5"
                    // viewBox="0 0 24.111 23.5"
                    style={{ fill: "#fff", fontWeight: "bold" }}
                  >
                    <path
                      d="M69.1,47.9l6.3-6.3c0.9-1,0.8-2.5-0.2-3.4c-0.9-0.8-2.3-0.8-3.2,0l-6.3,6.3l-6.3-6.3c-1-0.9-2.5-0.8-3.4,0.2
  c-0.8,0.9-0.8,2.2,0,3.1l6.3,6.3L56,54.2c-1,0.8-1.2,2.3-0.3,3.4c0.8,1,2.3,1.2,3.4,0.3c0.1-0.1,0.3-0.2,0.4-0.4l6.3-6.3l6.3,6.3
  c0.9,1,2.4,1.1,3.4,0.2c1-0.9,1.1-2.4,0.2-3.4c-0.1-0.1-0.1-0.1-0.2-0.2L69.1,47.9z"
                    />
                    <path
                      className="st1"
                      d="M58.5,37.1c-0.8-0.8-2-0.8-2.8,0s-0.8,2,0,2.8c2.5,2.5,3.8,5.7,3.8,9.2s-1.4,6.7-3.8,9.2c-0.8,0.8-0.8,2,0,2.8
  c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6c3.2-3.2,5-7.5,5-12S61.7,40.3,58.5,37.1z"
                    />
                    <path
                      className="st1"
                      d="M63.8,31.8c-0.8-0.8-2-0.8-2.8,0s-0.8,2,0,2.8c3.9,3.9,6,9,6,14.5s-2.1,10.6-6,14.5c-0.8,0.8-0.8,2,0,2.8
  c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6c4.7-4.6,7.2-10.8,7.2-17.3S68.5,36.4,63.8,31.8z"
                    />
                    <g>
                      <path
                        d="M45.9,71.1c-1.1,0-2.1-0.3-3-1L29.3,59.7h-8.8c-2.7,0-4.8-2.1-4.8-4.6V38.9c0-2.6,2.2-4.6,4.8-4.6h8.8l13.5-10.4
    c1.5-1.1,3.4-1.3,5.1-0.6c1.7,0.8,2.7,2.4,2.7,4.2v39.1c0,1.8-1,3.4-2.7,4.2C47.3,71,46.6,71.1,45.9,71.1z M20.5,38.9L20.5,38.9
    v16.2h9.7c0.6,0,1.1,0.2,1.5,0.5l14.2,10.9V27.4L31.7,38.3c-0.4,0.3-1,0.5-1.5,0.5H20.5z"
                      />
                    </g>
                  </svg>
                )}
              </div>
              <div className="col-4 d-none d-md-block">
                <hr className="bottom-hr" />
              </div>
              <div className="col-md-1 col-2 text-center">
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
            </div>
          </div>
        </div>

        <img
          src={this.state.selectedImage}
          alt="background"
          className="fullscreen-bg"
        />

        <div className="hero-section">
          <img src={main} className="mainGif" alt="mainGif" />
        </div>
      </>
    );
  }
}

export default App;
