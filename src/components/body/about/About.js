import React from 'react';
import './About.css';
import SocialContact from '../../common/social-contact/SocialContact';

const About = () => {
  return (
    <div className='about'>
        <div className="about-top">
          <div className="about-info">
            -Hello there 👋, I am <br />
            <span>Sanjay Sharma</span> <br />
            a Java and React.js developer with a passion for crafting high-quality web applications.
          </div>
          <div className="about-photo">
            <img src={require('../../../image/img.png')} alt='sanjay-pic' className='image' />
          </div>
        </div>
        <SocialContact/>
    </div>
  )
}

export default About
