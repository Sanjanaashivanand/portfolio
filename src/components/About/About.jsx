import React from 'react'
import './About.css'
import memoji from '../../assests/memoji.jpeg'

export const About = () => {
  return (
    <div className='about-container'>
      <h1 className='title'>About Me</h1>
      <div className='my-image-container'>
        <img className='my-image' src={memoji} alt='me'/>
      </div>
      
      <h2 className='name-tag'>Sanjana Shivananda</h2>
      <h4 className='sub-title'>Computer Science Master's Candidate</h4>
      
      <div className='about-description'>
      <p>Hey, I'm Sanjana Shivananda, a tech enthusiast with a Master's in Computer Science from Arizona State University. 
        I sprinkle innovation into projects, like boosting support efficiency and system performance at PricewaterhouseCoopers. 
        From crafting a Mood-based Music Recommendation System to an IoT Smart Door Lock, I bring tech to life! 
        I've led cool events, nabbed awards, and mentored at Campk12. 
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

      
    </div>
  )
}
