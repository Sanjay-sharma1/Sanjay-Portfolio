import React from 'react';
import './Body.css';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Separator from '../common/separator/Separator';

const Body = () => {
  return (
    <div className='body'>
      <section id='about'>
        <About/>
      </section>
      <div>
        <Separator/>
      </div>
      <section id='projects'>
        <Projects/>
      </section>
      <div>
        <Separator/>
      </div>
      <section id='skills'>
        <Skills/>
      </section>
      <div>
        <Separator/>
      </div>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Body
