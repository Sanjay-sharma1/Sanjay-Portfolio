import React from 'react';
import './Contact.css';
import SocialContact from '../../common/social-contact/SocialContact'

const Contact = () => {
  return (
    <div className='contact'>
        <label className="section-title">Contact Me</label>
        <div className="contact-container">
          <div className='contact-left'>
            <p>Want to get in touch ? Contact me here</p>
            <SocialContact/>
          </div>
          <div className="download">
            <a download href={require("../../../image/Sanjay-Sharma-Resume.pdf")}>
              <i className="fi-rr-cloud-download download-icon" />
              Download Resume
            </a>
          </div>
        </div>
    </div>
  )
}

export default Contact
