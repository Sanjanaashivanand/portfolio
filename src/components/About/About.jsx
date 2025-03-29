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
import { TbBeach, TbSunset2 } from "react-icons/tb";
import { motion } from 'framer-motion';

export const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className='about-me-page-container'
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.8 }}
    >
      <motion.div className='about-row' variants={fadeIn} transition={{ delay: 0.2 }}>
        <div className='about-col-des'>
          <motion.h3 transition={{ delay: 0.3 }}>Hey, I'm Sanjana 💻🌞</motion.h3>
          <motion.h1 transition={{ delay: 0.4 }}>This is where curiosity meets creativity ✨</motion.h1>

          <motion.p transition={{ delay: 0.5 }}>
          I'm a computer science grad passionate about building human-first tech. Whether it's designing clean interfaces, training models, or uncovering insights from messy data — I love bringing ideas to life.
            <br/><br/>
            My brain is a blend of logic and aesthetic. I’m always looking for ways to make technology more intuitive and intentional — the kind that feels less like a tool and more like an experience. I treat clean code like creative writing: expressive, readable, and just the right amount of poetic.
            <br/><br/>
            My current research interests lie at the intersection of cognition and computation — from conceptual modeling to perception-driven learning. I'm especially drawn to projects that merge deep learning with human psychology to build systems that not only solve problems, but understand them.
          </motion.p>
        </div>

        <motion.div 
          className='about-col-img'
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <img className='my-img' src={Me} alt="Sanjana" draggable="false"/>
        </motion.div>
      </motion.div>

      <motion.div className='mindmap-row' variants={fadeIn} transition={{ delay: 0.7 }}>
        <h1>How I Think Through Tech 🧠⚙️</h1>
        <div className='mindmap'>
          <img className="mindmap" src={mindmap} alt="Mind Map" draggable="false" />
        </div>
      </motion.div>

      <motion.div className='facts' variants={fadeIn} transition={{ delay: 0.8 }}>
        <h1>📌 Snapshots </h1>
        <ul>
          {[{
            icon: <FaMusic />,
            text: "Music isn't just background noise — it's my dev environment.",
            type: 'embed',
            src: "https://open.spotify.com/embed/playlist/6jbn1cwPrem1cT1guLU5Zl?utm_source=generator&theme=0"
          },
          {
            icon: <GiBookshelf />,
            text: "If I'm not coding, I'm probably nose-deep in a plot twist.",
            src: SanjReads
          },
          {
            icon: <LuLanguages />,
            text: "I speak English, Hindi, Kannada, and Telugu — and I code in a few languages too.",
            src: SanjSpeaks
          },
          {
            icon: <TbBeach />,
            text: "Hiking? No thanks. I'll be over here with SPF 50 and a coconut.",
            src: SanjatBeach
          },
          {
            icon: <TbSunset2 />,
            text: "Sunsets and silence — that's how I reboot.",
            src: Sunset
          }].map((fact, idx) => (
            <motion.li key={idx} className='row' initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * idx }}>
              <h3>{fact.icon} {fact.text}</h3>
              {fact.type === 'embed' ? (
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={fact.src}
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              ) : (
                <img src={fact.src} alt='Fact' draggable="false" />
              )}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <Footer/>
    </motion.div>
  )
}