import React from 'react'
import "./footer.scss"
import { AiFillGithub } from "react-icons/ai"
import { HiMail } from "react-icons/hi"
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="Footer">
      <ul className="Footer__links">
        <li className="Links__item">
          <a className="item__container" href="https://www.linkedin.com/in/ratkosimidzija/" >
            <FaLinkedinIn />
            <span>linkedin</span>
          </a>
        </li>
        <li className="Links__item">
          <a className="item__container" href="https://github.com/Ratko-Sim" >
            <AiFillGithub />
            <span>gitHub</span>
          </a>
        </li>
        <li className="Links__item">
          <a className="item__container" href="mailto:ratko.simidzija@icloud.com">
            <HiMail />
            <span>mail</span>
          </a>
        </li>
        <li className="Links__item">
          <a className="item__container" href="https://t.me/sira_08" >
            <FaTelegramPlane />
            <span>telegram</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
