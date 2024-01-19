import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './Footer.css'


const Icons = [
    {
        name: 'GitHub',
        link : 'https://github.com/Sanjanaashivanand',
      },
    {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sanjana-shivananda/',
    },
    {
      name: 'Leetcode',
      link: 'https://leetcode.com/sanjanashivananda07/',
    },
    {
      name: 'Gmail',
      link: 'mailto:sanjanashivananda07@gmail.com',
    }
];

export const Footer = () => {

  return (
    <footer className='footer'>
      <div className="icon-section">
    {Icons.map((Icon, index) => (
      <SocialIcon label={Icon.name} url={Icon.link} style={{width: '2em', height: '2em'}}/>
    ))}
  </div>
  <div className="copyright">
    <p>&copy; 2024 Sanjana Shivananda. All Rights Reserved.</p>
  </div>
      
    </footer>
  )
}

