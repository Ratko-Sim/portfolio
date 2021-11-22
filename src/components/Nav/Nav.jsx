import React from 'react'
import { NavLink } from 'react-router-dom';
import "./nav.scss"
import { AiFillHome, AiFillProject } from "react-icons/ai"
import { HiMail } from "react-icons/hi"

function Nav() {
  return (
    <div className="Nav">
      <ul className="Nav__list">
        <li className="Nav__link">
          <NavLink activeClassName='Active-page' exact to='/'>
            <AiFillHome />
            <span className="Link__icon">about</span>
          </NavLink>
        </li>
        <li className="Nav__link">
          <NavLink activeClassName='Active-page' exact to='/projects'>
            <AiFillProject />
            <span className="Link__icon">projects</span>
          </NavLink>
        </li>
        <li className="Nav__link">
          <NavLink activeClassName='Active-page' exact to='/contact'>
            <HiMail />
            <span className="Link__icon">contact</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
