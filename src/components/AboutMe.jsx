import React from 'react'
import './AboutMe.css'
import memoji from '../assests/memoji.jpeg'


export const AboutMe = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=1bBebA0iYqM7xTXoAYksNPyVua0DeZfb_');
  };

  return (
    <div className='about-me'>

      <div class="open-to-work-badge">
    <img src={memoji} alt="Profile Picture"/>
    <div class="open-to-work-overlay">
      Open to Work
    </div>
  </div>

        <h1 className='title'>Hello,<br/>
        I am <span className='color-text'>Sanjana Shivananda</span></h1>
        
        <div className='tagline'><p>Full Stack Developer | Machine Learning Enthusiast</p></div>

        <div>
          <button class="box" onClick={handleDownload}>Download Resume</button>
        </div>


    </div>
  )
}
