import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails';
import './ProjectInfo.css'
import { HiMiniCommandLine } from "react-icons/hi2";
import { BsNewspaper } from "react-icons/bs";


export const ProjectInfo = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null); // Initialize state with null
  
    const findProjectById = (projectId) => {
      return ProjectDetails.find(proj => proj.id === projectId);
    };


  
    useEffect(() => {
      const fetchProject = () => {
        const foundProject = findProjectById(id);
        setProject(foundProject);
      };
  
      fetchProject();
    }, [id]); 

    useEffect(() => {
        if (project) {
          // Perform any actions with the found project here
          console.log('Found project:', project);
        }
      }, [project]);

    

    return (
      <div className='project-info-container'>
        {!project ? <h1>Loading</h1> :
            <div className='project-info'>
            <div className='project-header'>
              <h1 className='project-heading'>
                {project.title}
              </h1>
              <span className='view-code-icon'>
                  {!project.code ? '' : <a href={project.code}>
                    <HiMiniCommandLine /> View Code
                  </a>}
                  {!project.publication ? '' : <a href={project.publication}>
                    <BsNewspaper /> View Paper
                  </a>}
                </span>
            </div>
            <img className='cover-image' src={project.image} alt={project.title} />
            <div className='content' dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        }
      </div>
    );
}
