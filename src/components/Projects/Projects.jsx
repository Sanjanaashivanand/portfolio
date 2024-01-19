import React from 'react'
import './Projects.css'
import ProjectDetails from './ProjectDetails'
import { Link } from 'react-router-dom'

export const Projects = () => {
 return (
    <div className='projects-container'>
      <h1>Projects</h1>
      <div className='gallery-view'>
        {ProjectDetails.map((project, index) => {
          return (
            <Link to={`/projects/${project.id}`}>
              <div key={project.id} className='project-card'>
                <img className='display-image' src={project.image} alt={`Project: ${project.title}`} />
                <div className='project-title'>
                  {project.title}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
 )
}