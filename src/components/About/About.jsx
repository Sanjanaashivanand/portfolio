import React from 'react'
import './About.css'
import memoji from '../../assests/memoji.png'
import mindmap from '../../assests/MindMap.png'
import { Footer } from '../Footer/Footer'
import SanjReads from '../../assests/AboutMe/Reading.jpeg'
import SanjSpeaks from '../../assests/AboutMe/Speaking.jpeg'
import SanjatBeach from '../../assests/AboutMe/Beach.jpeg'
import Sunset from '../../assests/AboutMe/Sunset.jpeg'
import Me from '../../assests/AboutMe/AboutMe.jpeg'
import { FaMusic } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { LuLanguages } from "react-icons/lu";
import { TbBeach } from "react-icons/tb";
import { TbSunset2 } from "react-icons/tb";


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
          <img className='my-img' src={Me} draggable="false"/>
        </div>
      </div>

      <div className='mindmap-row'>
        <h1>How I Approach a Project?</h1>
        <div className='mindmap'>
          <img className="mindmap" src={mindmap} draggable="false"></img>
        </div>
      </div>

      <div class='facts'>
    <h1>Fun Facts about me</h1>
    <ul>
      <li>
        <div class='row'>
          <h3><FaMusic /> My code thrives on the energy of my playlist, where Beethoven meets the latest indie sensations.</h3>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/6jbn1cwPrem1cT1guLU5Zl?utm_source=generator&theme=0"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </li>
      <li>
        <div class='row'>
          <h3><GiBookshelf /> Reading is my passport to explore countless worlds and endless inspiration.</h3>
          <img src={SanjReads} alt='Sanj Reads' draggable="false"></img>
        </div>
      </li>
      <li>
        <div class='row'>
          <h3><LuLanguages /> I am Multilingual. I speak English, Hindi, Kannada, and Telugu</h3>
          <img src={SanjSpeaks} alt='Sanj Reads' draggable="false"></img>
        </div>
      </li>
      <li>
        <div class='row'>
          <h3><TbBeach /> Team Beach all the way! No stress about climbing 100 rocks—just the soothing rhythm of waves and sandy serenity.</h3>
          <img src={SanjatBeach} draggable="false"></img>
        </div>
      </li>
      <li>
        <div class='row'>
          <h3><TbSunset2 /> Life's mantra: 'Sometimes you make choices, sometimes choices make you.' Amid it all, a reminder: it's okay—just watch the sunset and heal yourself</h3>
          <img src={Sunset} alt='Sanj Reads' draggable="false"></img>
        </div>
      </li>
    </ul>
  </div>

      <Footer/>
    
      
    </div>
  )
}
