import React from 'react'
import './About.css'
import memoji from '../../assests/memoji.png'
import mindmap from '../../assests/MindMap.png'
import { Footer } from '../Footer/Footer'

export const About = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=1bBebA0iYqM7xTXoAYksNPyVua0DeZfb_');
  };

  return (
    <div className='about-me-page-container'>
    
      <div className='about-row'>
        <div className='about-col-des'>
        <h3>Hey there, I am Sanjana</h3>
      <h1>Welcome to Sanjverse</h1>

      <p>I am a driven computer science graduate with specialized skills in web development, machine learning and data analytics. 
        I combine analytical prowess with creative problem-solving ability to derive impactful insights. My curiosity and perpetual desire to 
        upskill myself enables me to pivot smoothly across interdisciplinary projects. I excel when provided complex challenges requiring resourcefulness
        and subtle discoveries previously unseen to positively impact communities through technology. 
        <br/>
        <br/>
        When not coding models or building new frameworks, 
        I unwind by capturing aesthetic details all around through photography or immersing myself in moving lyricism. 
        I am always seeking to expand not just my technical competencies but also my perspective through continuous exposure to diverse people, 
        ideas, and cultures worldwide. 
      </p>
        </div>

        <div className='about-col-img'>
          <img className='my-img' src={memoji}/>
        </div>
      </div>

      <div className='mindmap-row'>
        <h1>How I Approach a Project?</h1>
        <div className='mindmap'>
          <img className="mindmap" src={mindmap}></img>
        </div>
        
      </div>

      <Footer/>
    
      
    </div>
  )
}
