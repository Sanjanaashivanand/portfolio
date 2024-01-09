import React from 'react'
import { NavLink } from 'react-router-dom'
import './DesktopNav.css'

export const DesktopNav = (props) => {
  return (
    <nav className='desktop-nav'>
        <ul className='desktop-nav-list'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='https://medium.com/@sanjanashivananda07'>Blog</NavLink>
          </li>
          <li>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Me</NavLink>
          </li>
        </ul>
        {props.content}
    </nav>
  )
}
