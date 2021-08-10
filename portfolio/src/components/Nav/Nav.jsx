import React from 'react'
import { NavLink } from 'react-router-dom';
import "./nav.scss"

function Nav() {
  return (
    <div className="Nav">
      <ul className="Nav__list">
        <li className="Nav__link">
          <NavLink activeClassName='Active-page' exact to='/'>
          <i class="fa fa-home"></i>            
          <span className="Link__icon">home</span> 
          </NavLink>
        </li>
        <li className="Nav__link">
          <NavLink activeClassName='Active-page' exact to='/about'>
          <i class="fa fa-user"></i>            
            <span className="Link__icon">about</span> 
          </NavLink>
        </li>
        <li className="Nav__link">
          <NavLink activeClassName='Active-page' exact to='/projects'>
          <i class="fa fa-briefcase"></i>            
            <span className="Link__icon">projects</span> 
          </NavLink>
        </li>
        <li className="Nav__link">
          <NavLink activeClassName='Active-page' exact to='/resume'>
          <i class="fa fa-file-text"></i>            
            <span className="Link__icon">resume</span> 
          </NavLink>
        </li>
        <li className="Nav__link">
          <NavLink activeClassName='Active-page' exact to='/contact'>
          <i class="fa fa-envelope-open"></i>            
            <span className="Link__icon">contact</span> 
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav
