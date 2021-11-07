import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className="Footer">
      <ul className="Footer__links">
        <li className="Links__item">
          <a href="https://www.linkedin.com/in/ratkosimidzija/" >
            <i className="fa fa-linkedin"></i>
            <span>linkedin</span>
          </a>
        </li>
        <li className="Links__item">
          <a href="https://github.com/Ratko-Sim" >
            <i className="fa fa-github"></i>
            <span>gitHub</span>
          </a>
        </li>
        <li className="Links__item">
          <a href="mailto:ratko.simidzija@icloud.com">
            <i className="fa fa-envelope"></i>
            <span>mail</span>
          </a>
        </li>
        <li className="Links__item">
          <a href="https://t.me/sira_08" >
            <i className="fa fa-telegram"></i>
            <span>telegram</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
