import React from 'react';
import "./about.scss"
import Slide from 'react-reveal/Slide';

function About() {
  return (
    <Slide right>
      <div className="About">
        <div className="About__top-cont">
          <h1>about me</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, incidunt.</p>
        </div>
        <div className="About__bottom-cont">
          <Slide right>
            <div className="Bottom-cont__left">
              <div className="Left__img-cont"></div>
            </div>
          </Slide>
          <Slide right cascade >
            <div className="Bottom-cont__right">
              <Slide right>
                <h2>Creative web developer</h2>
              </Slide>
              <div className="Right__info">

                <div className="info__left">
                  <Slide right cascade>
                    <ul>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </Slide>

                </div>
                <div className="info__right">
                  <Slide right cascade>
                    <ul>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                  </Slide>

                </div>
              </div>
              <div className="Right__buttons">
                <Slide right delay={300}>
                  <button>download cv</button>
                  <button>contact me</button>
                </Slide>
              </div>
            </div>
          </Slide>


        </div>
      </div>
    </Slide >
  )
}

export default About
