import React from 'react';
import './Skills.css';
import { SkillsData } from '../../data/SkillsData'
import SkillCard from './SkillCard';

const Skills = () => {

  const data = SkillsData;
  return (
    <div className='skills'>
        <label className='section-title'>Skills</label>
        <div className='section-container'>
          {data.map((item)=>{
            return (
              <div className="skills-section">
                <label className="section-title">{item.type}</label>
                <div className="skill-list">
                  {item.list.map((skill)=>{
                    return (
                      <SkillCard skill = {skill}/>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Skills
