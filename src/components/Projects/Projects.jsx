import React from 'react'
import './Projects.css'
import ProjectDetails from './ProjectDetails'
import { Link } from 'react-router-dom'


export const Projects = () => {
  return (
    <div className='projects-container'>
      <h1>Projects</h1>
      {ProjectDetails.map((project,index)=>{
        return(
           <div key={project.id} className='project-card'>
          <Link to={`/projects/${project.id}`}>
            <h3>{project.title}</h3>
          </Link>
          <p>{project.description}</p>
        </div>
        )
      })}
    </div>
  )
}
