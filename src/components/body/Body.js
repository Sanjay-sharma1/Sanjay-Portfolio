import React from 'react';
import './Body.css';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

const Body = () => {
  return (
    <div className='body'>
      <section id='about'>
        <About/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Body
