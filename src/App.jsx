import React, { useState } from 'react'
import './App.css'
import { Toggle } from './components/Toggle';
import useLocalStorage from 'use-local-storage';
import { AboutMe } from './components/AboutMe';
import{Route, Routes, NavLink} from 'react-router-dom'
import { Projects } from './components/Projects/Projects';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  const[isDark, setIsDark] = useLocalStorage("isDark", false);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>

      <nav className='desktop-nav'>
        <ul>
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
        
        <Toggle
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />
        
      </nav>

      

      
      <Routes>
        <Route path='*' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

      <Footer/>

      
    </div>
  )
}
