import React, { useState, useEffect, useRef } from 'react';
import './Home.css'
import memoji from '../assests/memoji.jpeg'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdOutlineWork as WorkIcon } from "react-icons/md";
import { IoSchoolSharp as SchoolIcon } from "react-icons/io5";
import 'react-vertical-timeline-component/style.min.css';



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
    window.open('https://drive.google.com/uc?export=download&id=1bBebA0iYqM7xTXoAYksNPyVua0DeZfb_');
  };



  return (
    <div className='home-container'>

      <div className='about-me'>

        <div class="open-to-work-badge">
          <img src={memoji} alt="Profile Picture"/>
        </div>

        <h1 className='title'>Hello,<br/>
        I am <span className='color-text'>Sanjana Shivananda</span></h1>
        
        <div className='tagline'><p>Full Stack Developer | Machine Learning Enthusiast</p></div>

        <div>
          <button class="box" onClick={handleDownload}>Download Resume</button>
        </div>

      </div>

      <div className="timeline">
        <h1 className='timeline-heading'>Education and Experience</h1>
        <VerticalTimeline lineColor="rgba(33, 150, 243, 0.8)">
        {[...timeline].reverse().map((item, key)=>(
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          position={item.isWork ? 'right' : 'left'}
          contentStyle={{ background: 'rgba(33, 150, 243, 0.8)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgba(33, 150, 243, 0.8)' }}
          date={item.date}
          iconStyle={{ background: 'rgba(33, 150, 243,0.8)', color: '#fff' }}
          icon={item.isWork ? <WorkIcon/> : <SchoolIcon/>}
        >
        <h3 className="vertical-timeline-element-title">{item.company}</h3>
        <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>
        <p>{item.detailed_date}</p>
        <p>{item.description}</p>
        </VerticalTimelineElement>
        ))}
      
      </VerticalTimeline>
      </div>
      


    </div>
  )
}
