import React from 'react';
import './Projects.css';
import { ProjectsData } from '../../data/Projectsdata';
import ProjectsCard from './ProjectsCard';

const Projects = () => {

  const data = ProjectsData
  return (
    <div className='projects'>
        <label className='section-title'>Projects</label>
        <div>
          {data.map((project)=>{
            return <ProjectsCard project={project}/>
          })}
        </div>
    </div>
  )
}

export default Projects
