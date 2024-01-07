import React, { useState } from 'react'
import './App.css'
import { Toggle } from './components/Toggle';
import useLocalStorage from 'use-local-storage';
import { AboutMe } from './components/AboutMe';
import { Blog } from './components/Blog/Blog';
import{Route, Routes, Link, NavLink} from 'react-router-dom'
import { Projects } from './components/Projects/Projects';
import { About } from './components/About/About';

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
            <NavLink to='/blog'>Blog</NavLink>
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
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

    </div>
  )
}
