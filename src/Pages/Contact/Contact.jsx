import React from 'react';
import './contact.scss';
import Fade from 'react-reveal/Fade';
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi"

export default function Contact() {

  return (
    <Fade clear cascade>
      <section className="contactPage">
        <div className="contactMainContainer">
          <div className="contactInfo">
            <div className="overlay">
              <div className="contactInfoTitle">
                <h2>Get in touch</h2>
                <p>Looking forward to hear from you!</p>
              </div>
              <div className="contactInfoBody">
                <div>
                  <HiOutlineMail size={20} />
                  <span>ratko.simidzija@icloud.com</span>
                </div>
                <div>
                  <HiOutlineLocationMarker size={20} />
                  <span>20255 Hamburg, DE</span>
                </div>
              </div>
            </div>
          </div>
          <form
            action="https://formsubmit.co/ratko.simidzija@icloud.com"
            method="POST"
            className="contactForm" >
            <h1>Contact me</h1>
            <div className="inputNameContainer">
              <input
                required
                type="text"
                name="name" />
              <label>Name</label>
            </div>
            <div className="inputEmailContainer">
              <input
                required
                type="email"
                name="email" />
              <label>Email</label>
            </div>
            <div className="textareaContainer">
              <textarea
                required
                maxLength="300"
                defaultValue={""}
                rows="5"
                name="message"
              />
              <label>Message</label>
            </div>
            <button className="contactFormBtn" type="submit" >
              <div className="animation"></div>
              <div className="title">send</div>
            </button>
          </form>
        </div>

      </section>
    </Fade>

  );
}
