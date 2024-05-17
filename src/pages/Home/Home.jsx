//import React from 'react'
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_button from "../../assets/play_icon.png";
import info_button from "../../assets/info_icon.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner_img" />
        <div className="hero_caption">
          <img src={hero_title} alt="" className="caption_img" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
            ipsum sapien, sed laoreet tortor ultricies quis. Sed sit amet augue
            libero. Proin ut tellus luctus, auctor diam a, pellentesque augue.
            Nunc aliquet ipsum nec tortor rhoncus, non suscipit enim feugiat. Ut
            eleifend suscipit pulvinar.
          </p>
          <div className="hero_btns">
            <button className="button">
              <img src={play_button} alt="" id="play_icon" />
              Play
            </button>
            <button className="button" id="info">
              <img src={info_button} alt="" id="info_icon" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
