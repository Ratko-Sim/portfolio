/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Fade from 'react-reveal/Fade';
import "./home.scss"

function Home() {
  return (
    <Fade clear>
      <div className="Home">
        <div className="Home__left-cont">
          <Fade clear cascade delay={200}>
            <h1>Lorem ipsum dol</h1>
          </Fade>
          <Fade clear cascade delay={300}>
            <h2>Lorem ipsum dolor sit amet.</h2>
          </Fade>
          <Fade clear cascade delay={400}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Fade>
          <ul className="Left-cont__links">
            <Fade clear cascade delay={500}>
              <li className="Links__item">
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </Fade>
            <Fade clear cascade delay={550}>
              <li className="Links__item">
                <a href="#">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </Fade>
            <Fade clear delay={600}>
              <li className="Links__item">
                <a href="#">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </Fade>
            <Fade clear cascade delay={650}>
              <li className="Links__item">
                <a href="#">
                  <i className="fa fa-telegram"></i>
                </a>
              </li>
            </Fade>
            <Fade clear cascade delay={700}>
              <li className="Links__item">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </Fade>
            <Fade clear cascade delay={750}>
              <li className="Links__item">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </Fade>
          </ul>
        </div>
        <div className="Home__right-cont">
          <Fade clear cascade delay={400}>
            <div className="Right__img-cont">
            </div>
          </Fade>
        </div>
      </div>
    </Fade>

  )
}

export default Home
