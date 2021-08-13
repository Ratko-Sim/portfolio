import React from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';
import { useHistory } from "react-router-dom";

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
    <div className="contact">
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" maxlength="500" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
