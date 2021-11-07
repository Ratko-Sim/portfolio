import React from 'react'
import { useHistory } from "react-router-dom";

function FormSubmittedMessage() {
  let history = useHistory();

  const backToHome = () => {

    history.push("/")
  }

  return (
    <div className="FormSubmittedMessage">
      <div>
        <h2>Your message has been sent successfully.</h2>
        <h5>Thank you!</h5>
        <button onClick={backToHome} type="submit">
          <div className="animation"></div>
          <div className="title">back to home</div>
        </button>
      </div>
    </div>
  )
}

export default FormSubmittedMessage
