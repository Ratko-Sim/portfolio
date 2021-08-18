import React from 'react';
import "./about.scss"
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <Fade clear>
      <div className="About">
        <div className="About__top-cont">
          <Fade clear cascade delay={100}>
            <h1>about me</h1>
          </Fade>
          <Fade clear cascade delay={200}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, incidunt.</p>
          </Fade>
        </div>
        <div className="About__bottom-cont">
          <div className="Bottom-cont__left">
            <Fade clear cascade delay={400} duration={1500}>
              <div className="Left__img-cont"></div>
            </Fade>
          </div>
          <div className="Bottom-cont__right">
            <Fade clear cascade delay={300}>
              <h2>Creative web developer</h2>
            </Fade>
            <div className="Right__info">
              <div className="info__left">
                <Fade clear cascade delay={400}>
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                </Fade>
              </div>
              <div className="info__right">
                <Fade clear cascade delay={400}>
                  <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                </Fade>
              </div>
            </div>
            <Fade clear cascade delay={400}>
              <div className="Right__buttons">
                <button>download cv</button>
                <button>contact me</button>
              </div>
            </Fade>

          </div>
        </div>
      </div>
    </Fade >
  )
}

export default About
