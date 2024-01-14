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
      <p><strong>Hello World!</strong></p>
      <p>Welcome to my portfolio! I'm a Master's in Computer Science student at Arizona State University, passionate about experimenting with new technologies. As a skilled MERN stack developer, I'm continuously exploring the intersection of creativity and functionality. Currently, I'm diving into the captivating world of machine learning. Join me on this exciting journey of innovation and discovery!
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
