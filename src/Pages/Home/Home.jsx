/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Fade from 'react-reveal/Fade';
import "./home.scss"
import CV from "./Ratko_Simidzija_Resume.pdf";

function Home() {
  return (
    <Fade clear>
      <div className="Home">
        <div className="Home__right-cont">
          <div className="Right__img-cont">
          </div>
        </div>
        <div className="Home__left-cont">
          <span className="left-cont__name">
            Hi, I'm
            <span>Ratko Simidzija</span>
          </span>
          <span className="left-cont__title">Full-Stack Web Developer</span>
          <p className="left-cont__description">My newly found passion in coding motivated me to change my career. So I decided to join a 1-year full stack web dev course and I'm now loving every minute of it. Besides staring at code for hours, I also enjoy movies, Greek food and German beer.
          </p>
        </div>
        <div className="cv-container">
          <button>
            <div className="animation"></div>
            <a
              href={CV}
              rel="noreferrer"
              className="title"
              target="_blank"
            >Preview CV</a>
          </button>
          <button>
            <div className="animation"></div>
            <a
              href={CV}
              rel="noreferrer"
              className="title"
              download={CV}
            >Download CV</a>
          </button>
        </div>
      </div>
    </Fade>

  )
}

export default Home
