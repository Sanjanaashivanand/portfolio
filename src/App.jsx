import React, { useState, useEffect } from 'react';
import './App.css'
import { Toggle } from './components/Toggle';
import useLocalStorage from 'use-local-storage';
import { AboutMe } from './components/AboutMe';
import {Route, Routes, Navigate} from 'react-router-dom'
import { Projects } from './components/Projects/Projects';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { AppNav } from './components/AppNav/AppNav';
import { DesktopNav } from './DesktopNav/DesktopNav';
import { ProjectInfo } from './components/Projects/ProjectInfo/ProjectInfo';

export const App = () => {
  const[isDark, setIsDark] = useLocalStorage("isDark", false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='App' data-theme={isDark ? "dark" : "light"}>

        {isMobile ? (<AppNav content={<Toggle
            isChecked={isDark}
            handleChange={() => setIsDark(!isDark)}
        />}/>) : (<DesktopNav content={<Toggle
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />}/>)}
        
      
      <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects/:id' element={<ProjectInfo/>}/>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer/>

      
    </div>
  )
}
