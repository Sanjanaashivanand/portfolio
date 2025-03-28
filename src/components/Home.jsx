import React, { useState, useEffect, useRef } from 'react';
import './Home.css'
import memoji from '../assests/memoji.png'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdOutlineWork as WorkIcon } from "react-icons/md";
import { IoSchoolSharp as SchoolIcon } from "react-icons/io5";
import 'react-vertical-timeline-component/style.min.css';
import { Footer } from './Footer/Footer';
import { MdOutlineEmail } from "react-icons/md";


const timeline = [
  {
    date: '2018 - 2022',
    detailed_date: 'Aug-2018 - Aug 2022',
    position : 'Bachelor of Engineering in Information Science and Engineering ',
    company: 'Dayananada Sagar College of Engineering',
    location: 'Bangalore, KA',
    description: "Active participant in the college's literary club, serving as the Master of Ceremonies for events with 800+ attendees. Graduated with distinction, achieving a GPA of 8.82/10",
    isWork: false
  },
  {
    date: '2019 - 2019',
    detailed_date: 'Apr 2018 - present',
    position : 'Volunteer ',
    company: 'ISKON - Akshaya Patra',
    location: 'Bangalore, KA',
    description: 'Volunteered 100+ hours at Akshaya Patra, ISKCON, enhancing education for underprivileged children and reducing mid-day meal wastage by 20%.',
    isWork: true
  },
  {
    date: '2018 - 2022',
    detailed_date: 'July 2020 - Sept 2020',
    position : 'Coding Instructor',
    company: 'Campk12',
    location: 'Remote',
    description: 'In my role, I undertook the instruction of high school and middle school students, providing them with a solid foundation in programming, with a particular emphasis on JavaScript and Python. Collaboratively, I worked with colleagues to develop and fine-tune the curriculum, consistently aligning it with the most current industry trends and educational standards. This approach ensured that our students received the highest quality education and remained up-to-date with the ever-evolving landscape of programming.',
    isWork: true
  },
  {
    date: '2022 - 2022',
    detailed_date: 'Apr 2022 - Aug 2022',
    position : 'Web Development Intern',
    company: 'Kaatru @ Indian Institute of Technology, Madras',
    location: 'Bangalore, KA',
    description: 'In my role, I took charge of developing real-time air quality websites using the MERN stack, enriching them with dynamic data visualization using Chart.js and interactive maps with Leaflet. Beyond this, I played a pivotal role in designing and implementing essential internal systems, such as ticketing and communication platforms. As part of my responsibilities, I also embraced a mentorship role, working closely with a team of interns to ensure streamlined code management through Git. My contribution in these areas allowed for the smooth operation of crucial systems and fostered efficient collaboration within the team.',
    isWork: true
  },
  {
    date: '2023 - 2023',
    detailed_date: 'Sept 2023 - July 2023',
    position : 'Associate',
    company: 'PricewaterhouseCoopers Acceleration Centers',
    location: 'Bangalore, KA',
    description: 'I specialized in insurance technologies within the Cloud and Digital Platform domain, focusing on user interface design for insurance companies using Guidewire to optimize user experiences. My role also involved automating application testing with Katalon to enhance software quality and efficiency. Additionally, I gained invaluable experience in global client interaction, engaging with clients from diverse geographical backgrounds.',
    isWork: true
  },
  {
    date: '2018 - 2022',
    detailed_date: 'Aug-2018 - May 2025 (Expected)',
    position : "Master's in Computer Science",
    company: 'Arizona State University',
    location: 'Bangalore, KA',
    description: "Currently pursuing a Master's with a focus on machine learning. Actively involved in projects to apply theoretical knowledge to real-world applications. Excited about contributing to innovative solutions in the field",
    isWork: false
  }
]



export const Home = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=1PH2kVtMmnmmTmMoTZN-LrE6DswI_Nacj');
  };



  return (
    <div className='home-container'>

      <div className='about-me'>

        <div class="open-to-work-badge">
          <img src={memoji} alt="Profile Picture" draggable="false"/>
        </div>

        <h1 className='title'>Hello,<br/>
        I am <span className='color-text'>I’m Sanjana Shivananda</span>
        <span className='mobile-hide'>, CS Grad Student @ Arizona State University</span></h1>
        
        
        <div className='tagline'><p>Full Stack Developer · ML Explorer · Tech Storyteller</p></div>

        <div className='work-status'>
          <p>
            📬 Open for <span className='work-status-tag'>New Grad roles</span>
          </p>
        </div>

        <div className='resume-btn-container'>
          <button class="box" onClick={handleDownload}>Download Resume</button>
        </div>

        <div className="scroll-indicator" id="scroll-indicator">
          <span className="scroll-text">↓ Scroll to explore ↓</span>
        </div>


      </div>


      <div className="timeline">
        <h1 className='timeline-heading'>Education and Experience</h1>
        <VerticalTimeline lineColor='lightgrey' className='timeline-container'>
        {[...timeline].reverse().map((item, key)=>(
          <VerticalTimelineElement
          key={item.company}
          className="vertical-timeline-element"
          position={item.isWork ? 'right' : 'left'}
          contentStyle={{ background: 'var(--timeline-bg)', color: 'var(--primary-text-color)', borderRadius: '30px', padding:'20px'}}
          iconClassName={ 'timeline-icon'}
          iconStyle={{ background: 'var(--secondary-text-color)', color: 'var(--primary-text-color)' }}
          icon={item.isWork ? <WorkIcon/> : <SchoolIcon/>}
        >
        <h3 className="vertical-timeline-element-title">{item.company}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>
        <p><i>{item.detailed_date}</i></p>
        <p>{item.description}</p>
        </VerticalTimelineElement>
        ))}
      
      </VerticalTimeline>
      </div>

    
      <div className='skill-section'>
        <h1 className='timeline-heading'>Skills</h1>
        <div className='tech-stack'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="Java"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Python"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TS"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" alt="express"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="NextJS"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="mongoDB"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" alt="postgress"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="git"/>
      
        </div>

      </div>

      <div className='reach-out-form'>
        <h3>Let's Connect!</h3>
        <p> I'm always open to new opportunities, collaborations, or just saying hello. Feel free to reach out by email or through my social media links.</p>
          <a href="mailto:sanjanashivananda07@gmail.com" class="email-button"> <MdOutlineEmail /> Send an Email</a>
        <Footer/>
      </div>
    </div>

    
  )
}
