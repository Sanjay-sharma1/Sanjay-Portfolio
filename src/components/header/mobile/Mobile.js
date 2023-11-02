import React from 'react';
import './Mobile.css';

const Mobile = ({isOpen, setIsOpen}) => {
  return (
    <div className='mobile'>
        <div className="close-icon" onClick={()=>(setIsOpen(!isOpen))}>
            <i className="fi fi-rr-circle-xmark"></i>
        </div>

        <div className="mobile-options">
            <div className="mobile-option">
                <a href="#about">
                <i className="fi fi-rs-info option-icon"></i> About
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                <i className="fi fi-rs-laptop option-icon"></i> Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#project">
                <i className="fi fi-rr-edit-alt option-icon"></i> Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                <i className="fi fi-rr-user option-icon"></i> Contact Me
                </a>
            </div>
        </div>
    </div>
  )
}

export default Mobile
