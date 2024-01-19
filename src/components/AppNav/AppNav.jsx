import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import './AppNav.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

export const AppNav = (props) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    return (
        <div className="appnav-container">

            <div className='menu-items'>
                <div className='mobile-toggle'>
                    {props.content}
                </div>

                <label className="hamburger-menu" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <span className="hamburger-icon">
                        {!isChecked? <GiHamburgerMenu/> : <IoCloseOutline/>}
                    </span>
                </label>
            </div>

            

            <div className={`sidebar ${isChecked ? 'checked' : ''}`}>
                <nav>
                    <ul>
                        <li>
                            <Link className='link-element' to='/' onClick={handleCheckboxChange}>Home</Link>
                        </li>
                        <li>
                            <NavLink className='link-element' to='https://medium.com/@sanjanashivananda07' onClick={handleCheckboxChange}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink className='link-element' to='/projects' onClick={handleCheckboxChange}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink className='link-element' to='/about' onClick={handleCheckboxChange}>About Me</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

  )
}
