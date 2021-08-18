import React from 'react'
import { useHistory } from "react-router-dom";

function FormSubmittedMessage() {
  let history = useHistory();

  const backToHome = () => {

    history.push("/")
  }

  return (
    <div>
      <h2>Your message has been sent successfully.</h2>
      <hr />
      <h5>Thank you!</h5>
      <button onClick={backToHome}>Return to home page</button>
    </div>
  )
}

export default FormSubmittedMessage
