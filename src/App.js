import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
import main from "./main.gif";
import { isMobile } from "./helpers/utils";
import SideBar from "./components/sidebar";
import Audio from "./components/audio";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // images: [
      //   isMobile()
      //     ? "https://i.ibb.co/L9GrWzS/phone3.png"
      //     : "https://i.ibb.co/hxN2B9f/4-1.png",
      //   isMobile()
      //     ? "https://i.ibb.co/ZKRsgk6/phone5.png"
      //     : "https://i.ibb.co/VxVgkDK/3-1.png",
      //   isMobile()
      //     ? "https://i.ibb.co/k5j1FMJ/phone1.png"
      //     : "https://i.ibb.co/1LM5Xnv/2.png",
      //   isMobile()
      //     ? "https://i.ibb.co/8DqYSmW/phone4.png"
      //     : "https://i.ibb.co/FKpK1K5/1-1.png",
      //   isMobile()
      //     ? "https://i.ibb.co/R93yCZc/phone2.png"
      //     : "https://i.ibb.co/MPfYbDg/5-1.png"
      // ],

      in: 0,
      play: false,
      sound: true
    };
    this.sliderInterval = null;
  }

  componentDidMount() {
    this.sliderInterval = setInterval(() => {
      this.setState(prevState => {
        if (prevState.in === 3) {
          return {
            in: 0
          };
        } else {
          return {
            in: prevState.in + 1
          };
        }
      });
    }, 3000);
  }

  componentWillUnmount() {
    if (this.sliderInterval) clearInterval(this.sliderInterval);
  }
  render() {
    return (
      <>
        {isMobile() ? <SideBar /> : <NavBar />}
        <Audio />
        <div className={`wave11 ${this.state.in !== 0 ? "d-none" : ""}`}>
          <div className={`${isMobile() ? "wave1111" : "wave111"}  wave5`} />
          <div className={`${isMobile() ? "wave1111" : "wave111"}  wave4`} />
          <div className={`${isMobile() ? "wave1111" : "wave111"}  wave3`} />
          <div className={`${isMobile() ? "wave1111" : "wave111"}  wave2`} />
          <div className={`${isMobile() ? "wave1111" : "wave111"}  wave1`} />
          <div className={`${isMobile() ? "wave1111" : "wave111"}  wave0`} />
        </div>
        <div className={`wave22 ${this.state.in !== 1 ? "d-none" : ""}`}>
          <div className={`${isMobile() ? "wave2222" : "wave222"}  wave5`} />
          <div className={`${isMobile() ? "wave2222" : "wave222"}  wave4`} />
          <div className={`${isMobile() ? "wave2222" : "wave222"}  wave3`} />
          <div className={`${isMobile() ? "wave2222" : "wave222"}  wave2`} />
          <div className={`${isMobile() ? "wave2222" : "wave222"}  wave1`} />
          <div className={`${isMobile() ? "wave2222" : "wave222"}  wave0`} />
        </div>
        <div className={`wave33 ${this.state.in !== 2 ? "d-none" : ""}`}>
          <div className={`${isMobile() ? "wave3333" : "wave333"}  wave5`} />
          <div className={`${isMobile() ? "wave3333" : "wave333"}  wave4`} />
          <div className={`${isMobile() ? "wave3333" : "wave333"}  wave3`} />
          <div className={`${isMobile() ? "wave3333" : "wave333"}  wave2`} />
          <div className={`${isMobile() ? "wave3333" : "wave333"}  wave1`} />
          <div className={`${isMobile() ? "wave3333" : "wave333"}  wave0`} />
        </div>
        <div className={`wave44 ${this.state.in !== 3 ? "d-none" : ""}`}>
          <div className={`${isMobile() ? "wave4444" : "wave444"}  wave5`} />
          <div className={`${isMobile() ? "wave4444" : "wave444"}  wave4`} />
          <div className={`${isMobile() ? "wave4444" : "wave444"}  wave3`} />
          <div className={`${isMobile() ? "wave4444" : "wave444"}  wave2`} />
          <div className={`${isMobile() ? "wave4444" : "wave444"}  wave1`} />
          <div className={`${isMobile() ? "wave4444" : "wave444"}  wave0`} />
        </div>

        <div className="hero-section">
          <div className="text-center" style={{ position: "relative" }}>
            <img src={main} className="mainGif" alt="mainGif" />
            <p className="date">24th-27th March</p>
          </div>
        </div>
      </>
    );
  }
}

export default App;
