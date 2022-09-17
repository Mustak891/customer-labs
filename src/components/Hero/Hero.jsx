import React from "react";
import Video from "./Hero.mp4";
import "./Hero.css";
import Chip from "@mui/material/Chip";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="heroBg">
        <video
          className="videoBg"
          autoPlay={true}
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </div>
      <div className="heroContent">
        <h1 className="heroH1">
          Find the perfect <i>freelance</i>
        </h1>
        <p className="heroP">services for your business</p>
        <div className="textfield">
          <input
            type="text"
            class="form__field"
            placeholder={`TRY 'building mobile app'`}
          />
          <button type="button" class="btn btn--primary btn--inside uppercase">
            Search
          </button>
        </div>
        <p className="chip">
          Popular:&nbsp; <Chip label="Website Design" variant="outlined" />
          &nbsp;
          <Chip label="WordPress" variant="outlined" />
          &nbsp;
          <Chip label="Logo Design" variant="outlined" />
          &nbsp;
          <Chip label="Video Editing" variant="outlined" />
        </p>
      </div>
    </div>
  );
};

export default Hero;
