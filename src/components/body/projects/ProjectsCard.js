import React from 'react';
import './ProjectsCard.css';

const ProjectsCard = ({project}) => {
  return (
    <div className='project-card'>
      <div className="project-info">
        <label className='project-title'>{project.title}</label>
        <div className="project-links">
            {project.github && (
                <a className='project-link' href={project.github}>
                    <div className="link-button">
                    <i class="devicon-github-original colored"></i>Github
                    </div>
                </a>
            )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
            {project.tags.map((tag)=>{
                return (
                    <label className='tag'>{tag}</label>
                )
            })}
        </div>
      </div>
      <img src={project.image} alt="project-img" className='project-img' />
    </div>
  )
}

export default ProjectsCard ;
