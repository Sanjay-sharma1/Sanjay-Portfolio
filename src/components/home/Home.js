import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Body from '../body/Body';
import "./Home.css";

const Home = () => {
  return (
    <div className='home'>
        <div>
         <Header/>
        </div>
        <div>
            <Body/>
        </div>
        <div>
         <Footer/>
        </div>
    </div>
  )
}

export default Home
