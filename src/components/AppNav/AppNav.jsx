import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import './AppNav.css'

export const AppNav = (props) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleNavClick = () => {
        setIsChecked(false); 
    };

    return (
        <nav className="appnav-container">
            
            <div className='mobile-toggle'>
                {props.content}
            </div>
            

            <label className='hamburger-menu'>
                <input type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
            </label>


            <div className='sidebar'>
                <nav>
                    <ul>
                        <li>
                            <NavLink className='link-element' to='/' onClick={handleNavClick}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='link-element' to='https://medium.com/@sanjanashivananda07' onClick={handleNavClick}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink className='link-element' to='/projects' onClick={handleNavClick}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink className='link-element' to='/about' onClick={handleNavClick}>About Me</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
  )
}
