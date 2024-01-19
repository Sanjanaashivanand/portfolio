import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import './DesktopNav.css'

export const DesktopNav = (props) => {
  return (
    <nav className='desktop-nav'>
        <ul className='desktop-nav-list'>
          <li>
            <Link to='/portfolio/'>Home</Link>
          </li>
          <li>
            <NavLink to='https://medium.com/@sanjanashivananda07' target="_blank">Blog</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/portfolio/about'>About Me</NavLink>
          </li>
        </ul>
        {props.content}
    </nav>
  )
}
