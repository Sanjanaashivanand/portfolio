import React, {useState,useEffect} from 'react'
import { NavLink, Link} from 'react-router-dom'
import './DesktopNav.css'



export const DesktopNav = (props) => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        console.log(window.scrollY)
      );
    }
  }, []);


  return (
    <nav className='desktop-nav'>
        <ul className='desktop-nav-list'>
          <li>
            <Link to='/'>Home</Link>
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
