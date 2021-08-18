import React from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';
import { useHistory } from "react-router-dom";
import Fade from 'react-reveal/Fade';

export default function Contact() {
  let history = useHistory();

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_1lok04l', 'template_dk5vbi6', e.target, 'user_IHJNE0DJpOdz5rLt0VB1i')
      .then((result) => {
        history.push("/thank-you");
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Fade clear cascade>
      <div className="contact">
        <Fade clear cascade delay={200}>
          <h2>contact me</h2>
        </Fade>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <Fade clear cascade delay={250}>
            <label>Name</label>
            <input type="text" name="user_name" />
          </Fade>
          <Fade clear cascade delay={400}>
            <label>Email</label>
            <input type="email" name="user_email" />
          </Fade>
          <Fade clear cascade delay={550}>
            <label>Message</label>
            <textarea name="message" maxlength="500" />
          </Fade>
          <Fade clear cascade delay={700}>
            <input type="submit" value="Send" />
          </Fade>
        </form>
      </div>
    </Fade>

  );
}
