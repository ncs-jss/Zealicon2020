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
    this.sliderInterval = null;
  }

  componentDidMount() {
    this.sliderInterval = setInterval(() => {
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

        <img
          src={this.state.selectedImage}
          alt="background"
          className="fullscreen-bg"
        />

        <div className="hero-section">
          <img src={main} className="mainGif" alt="mainGif" />
          <p className="date">24th-27th March</p>
        </div>
      </>
    );
  }
}

export default App;
