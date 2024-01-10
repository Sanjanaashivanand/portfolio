import React, {useState} from 'react'
import { useParams } from 'react-router-dom';

export const ProjectInfo = () => {
    const { id } = useParams();
  
    return (
        <h2>Project Details for ID: {id}</h2>
    );
}
