import React, {useState, useEffect, createElement} from 'react'
import { SiLeetcode, SiGmail  } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import './Footer.css';

const Icons = [
    {
        name: 'GitHub',
        icon: FaGithub,
        link : '',
      },
    {
    name: 'LinkedIn',
    icon: ImLinkedin ,
    link: 'https://linkedin.com/in/yourlinkedin',
    },
    {
      name: 'Leetcode',
      icon: SiLeetcode,
      link: 'https://leetcode.com/sanjanashivananda07/',
    },
    {
      name: 'Gmail',
      icon: SiGmail, 
      link: 'mailto:sanjanashivananda07@gmail.com',
    }
];

export const Footer = () => {

  return (
    <footer>
      {Icons.map((Icon, index)=>{
        const Tag = Icon.icon;
        return(
          <a href={Icon.link} key={index} className='tooltip'>
            <div className='tooltiptext'>{Icon.name}</div>
            <Tag />
          </a>
        )
      })}
    </footer>
  )
}

