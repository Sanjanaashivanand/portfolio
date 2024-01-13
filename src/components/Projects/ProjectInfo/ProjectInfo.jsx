import React, {useState} from 'react'
import { useParams } from 'react-router-dom';


export const ProjectInfo = () => {
    const { id } = useParams();
    const selectedProject = ProjectDetails.find((project) => project.id === id);
  
    return (
      <div>
        {selectedProject ? (
          <>
            <h1>{selectedProject.title}</h1>
            <p>{selectedProject.description}</p>
          </>
        ) : (
          <p>No project found for ID: {id}</p>
        )}
      </div>
    );
}
