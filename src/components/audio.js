import React, { useState, useEffect } from "react";
import sound1 from "../audio/1.mp3";
import sound2 from "../audio/2.mp3";
import sound3 from "../audio/3.mp3";
import sound4 from "../audio/4.mp3";
import sound5 from "../audio/5.mp3";
import { withRouter } from "react-router-dom";
import brochure from "../brochure.pdf";
const useAudio = url => {
  const sounds = [sound1, sound2, sound3, sound4, sound5];
  const [currentSound, changeSound] = useState(
    Math.floor(Math.random() * Math.floor(5))
  );

  const [audio, changeAudio] = useState(new Audio(sounds[currentSound]));
  const [playing, setPlaying] = useState(true);

  const forward = () => {
    async function f() {
      setPlaying(false);

      return (currentSound + 1) % 5;
    }

    f().then(res => {
      changeSound(res);
      changeAudio(new Audio(sounds[res]));
      setPlaying(true);
    });
  };

  const backward = () => {
    async function f() {
      setPlaying(false);
      if (currentSound === 0) return 4;
      else return (currentSound - 1) % 5;
    }

    f().then(res => {
      changeSound(res);
      changeAudio(new Audio(sounds[res]));
      setPlaying(true);
    });
  };

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    setPlaying(true);

    audio.addEventListener("ended", () => {
      async function f() {
        setPlaying(false);

        return (currentSound + 1) % 5;
      }

      f().then(res => {
        changeSound(res);

        changeAudio(new Audio(sounds[res]));
        setPlaying(true);
      });
    });
    return () => {
      setPlaying(false);

      if (!isNaN(audio.duration)) {
        audio.currentTime = parseInt(audio.duration);
      }
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle, forward, backward];
};

const Player = ({ url }) => {
  const [playing, toggle, forward, backward] = useAudio(url);

  return (
    <div>
      <button style={{ display: "none" }} onClick={toggle}>
        {playing ? "Pause" : "Play"}
      </button>
      <div className="bottom-bar">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-md-4 text-center d-flex justify-content-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80%"
                viewBox="0 0 471.5 82"
                className="d-none d-md-flex"
              >
                <g transform="translate(-84 -916)">
                  <text className="a" transform="translate(87 948)">
                    <tspan x="0" y="0">
                      The Annual Techno-Cultural Fest
                    </tspan>
                  </text>
                  <text className="b" transform="translate(87 989)">
                    <tspan x="0" y="0">
                      JSSATE Noida
                    </tspan>
                  </text>
                  <line
                    className="c"
                    x2="234"
                    transform="translate(320.5 978.5)"
                  />
                </g>
              </svg>
            </div>
            <div className="col-md-4 justify-content-center d-flex align-items-center music-player">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.821"
                height="24.586"
                viewBox="0 0 23.821 24.586"
                className="mr-2"
                onClick={backward}
              >
                <g
                  className="aa"
                  transform="translate(23.821 24.586) rotate(180)"
                >
                  <g transform="translate(0 0)">
                    <path
                      className="bb"
                      d="M25.408,23.309A.916.916,0,0,0,24,24.082V46.835a.916.916,0,0,0,1.408.773L43.292,36.231a.916.916,0,0,0,0-1.546Z"
                      transform="translate(-24 -23.165)"
                    />
                    <path
                      className="b"
                      d="M70,24.874V46.405a1.374,1.374,0,0,0,2.749,0V24.874a1.374,1.374,0,0,0-2.749,0Z"
                      transform="translate(-48.927 -23.347)"
                    />
                  </g>
                </g>
              </svg>
              {!playing ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="75"
                  height="75"
                  viewBox="0 0 124.992 124.997"
                  onClick={toggle}
                  className="mr-2"
                >
                  <filter
                    id="a"
                    x="0"
                    y="0"
                    width="124.992"
                    height="124.997"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feFlood flood-opacity="0.161" />
                    <feComposite operator="in" in2="b" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                  <g className="bbb" transform="matrix(1, 0, 0, 1, 0, 0)">
                    <path
                      className="aaa"
                      d="M53.921,107a4.975,4.975,0,0,1-1.873-.364L17.631,92.728a4.969,4.969,0,0,1-2.73-2.682L.4,55.876a5.033,5.033,0,0,1-.033-3.827L14.269,17.631a4.968,4.968,0,0,1,2.683-2.73L51.122.4A5,5,0,0,1,54.949.364L89.366,14.27a4.968,4.968,0,0,1,2.73,2.683l14.5,34.169a5.037,5.037,0,0,1,.033,3.827L92.728,89.366a4.969,4.969,0,0,1-2.682,2.73l-34.17,14.5A4.979,4.979,0,0,1,53.921,107ZM44.438,38.4a2.005,2.005,0,0,0-2,2V66.522a2.005,2.005,0,0,0,2,2,1.973,1.973,0,0,0,.986-.265L68.379,55.2a2,2,0,0,0,0-3.477L45.424,38.661A1.972,1.972,0,0,0,44.438,38.4Z"
                      transform="translate(9 6)"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="75"
                  viewBox="0 0 124.992 124.997"
                  onClick={toggle}
                  className="mr-2"
                >
                  <filter
                    id="a"
                    x="0"
                    y="0"
                    width="124.992"
                    height="124.997"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dy="3" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feFlood flood-opacity="0.161" />
                    <feComposite operator="in" in2="b" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                  <g class="bbb" transform="matrix(1, 0, 0, 1, 0, 0)">
                    <path
                      class="aaa"
                      d="M53.921,107a4.975,4.975,0,0,1-1.873-.364L17.631,92.728a4.969,4.969,0,0,1-2.73-2.682L.4,55.876a5.033,5.033,0,0,1-.033-3.827L14.269,17.631a4.968,4.968,0,0,1,2.683-2.73L51.122.4A5,5,0,0,1,54.949.364L89.366,14.27a4.968,4.968,0,0,1,2.73,2.683l14.5,34.169a5.037,5.037,0,0,1,.033,3.827L92.728,89.366a4.969,4.969,0,0,1-2.682,2.73l-34.17,14.5A4.979,4.979,0,0,1,53.921,107Zm2.513-69.037a1,1,0,0,0-1,1v29a1,1,0,0,0,1,1h12a1,1,0,0,0,1-1v-29a1,1,0,0,0-1-1Zm-18,0a1,1,0,0,0-1,1v29a1,1,0,0,0,1,1h11a1,1,0,0,0,1-1v-29a1,1,0,0,0-1-1Z"
                      transform="translate(9 6)"
                    />
                  </g>
                </svg>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.821"
                height="24.586"
                viewBox="0 0 23.821 24.586"
                onClick={forward}
                className="mr-2"
              >
                <g class="aa">
                  <g transform="translate(0 0)">
                    <path
                      class="bb"
                      d="M25.408,23.309A.916.916,0,0,0,24,24.082V46.835a.916.916,0,0,0,1.408.773L43.292,36.231a.916.916,0,0,0,0-1.546Z"
                      transform="translate(-24 -23.165)"
                    />
                    <path
                      class="bb"
                      d="M70,24.874V46.405a1.374,1.374,0,0,0,2.749,0V24.874a1.374,1.374,0,0,0-2.749,0Z"
                      transform="translate(-48.927 -23.347)"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className="d-flex mobile-social w-100 align-items-center">
                <img
                  src="https://i.ibb.co/7NV858F/Group-15.png"
                  alt="Group-15"
                  border="0"
                  width="60%"
                  className="d-md-none"
                />
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
      </div>
    </div>
  );
};

export default withRouter(Player);
