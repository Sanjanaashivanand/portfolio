import React from 'react'
import './About.css'
import memoji from '../../assests/memoji.jpeg'

export const About = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=1bBebA0iYqM7xTXoAYksNPyVua0DeZfb_');
  };

  return (
    <div className='about-container'>
      <h1 className='title'>About Me</h1>
      <div className='my-image-container'>
        <img className='my-image' src={memoji} alt='me'/>
      </div>
      
      <h2 className='name-tag'>Sanjana Shivananda</h2>
      <h4 className='sub-title'>Computer Science Master's Candidate</h4>
      
      <div className='about-description'>
      <p><strong>Hey Tech Enthusiasts!</strong></p>
      <p>Currently pursuing a Master's in Computer Science from Arizona State University, my journey involves crafting 
        innovative tech solutions. My experience at PricewaterhouseCoopers Acceleration Centers delved into Cloud and Digital 
        Platforms. Proficient in Python, Java, C++, and various web frameworks, I've crafted diverse projects, from a Mood-based 
        Music Recommender to a Facial Recognition Smart Door Lock. Recognized for innovation and a commitment to volunteering, 
        this portfolio invites you to join my whimsical yet impactful journey through the tech landscape!
      </p>

      </div>

      <div class="skill-section">
      <h4 className='skill-heading'>Skills</h4>
      <ul class="skill-list">
          <li class="skill-item">MERN Stack</li>
          <li class="skill-item">Python</li>
          <li class="skill-item">Java</li>
          <li class="skill-item">MySQL</li>
          <li class="skill-item">Machine Learning</li>
      </ul>
      </div>

      <div className='resume-button-container'>
        <button className="resume-button" onClick={handleDownload}>Download Resume</button>
      </div>

      
    </div>
  )
}
