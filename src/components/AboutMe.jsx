import React from 'react'
import './AboutMe.css'


export const AboutMe = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=1bBebA0iYqM7xTXoAYksNPyVua0DeZfb_');
  };

  return (
    <div className='about-me'>
        <h1 className='title'>Sanjana Shivananda</h1>
        
        <div>
          <button class="box" onClick={handleDownload}>Download Resume</button>
        </div>


    </div>
  )
}
