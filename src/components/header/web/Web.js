import React from 'react';
import './Web.css';

const Web = () => {
  return (
    <div className='web'>
      <div className="web-option">
        <a href="#about">
        <i className="fi fi-rs-info option-icon"></i> About
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
        <i className="fi fi-rs-laptop option-icon"></i> Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#project">
        <i className="fi fi-rr-edit-alt option-icon"></i> Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
        <i className="fi fi-rr-user option-icon"></i> Contact Me
        </a>
      </div>
    </div>
  )
}

export default Web
