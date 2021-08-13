/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Slide from 'react-reveal/Slide';
import "./home.scss"
import Rotate from 'react-reveal/Rotate';

function Home() {
  return (
    <Slide right>
      <div className="Home">
        <div className="Home__left-cont">
          <Rotate top left>
            <h1>Lorem ipsum dol</h1>
          </Rotate>
          <Rotate top left cascade>
            <h2>Lorem ipsum dolor sit amet.</h2>
          </Rotate>
          <Rotate bottom left cascade>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Rotate>
          <Rotate bottom left>
            <ul className="Left-cont__links">
              <li className="Links__item">
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="Links__item">
                <a href="#">
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li className="Links__item">
                <a href="#">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
              <li className="Links__item">
                <a href="#">
                  <i className="fa fa-telegram"></i>
                </a>
              </li>
              <li className="Links__item">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="Links__item">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>

            </ul>
          </Rotate>
        </div>

        <div className="Home__right-cont">
          <Rotate duration={1000}>
            <div className="Right__img-cont">
            </div>
          </Rotate>

        </div>
      </div>
    </Slide>

  )
}

export default Home
