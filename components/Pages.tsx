"use client";
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import Marque from './Marque'
import About from './About'
import Featured from './Featured'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Eye from './Eye';




function Pages() {

    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll();

        return () => {
            locomotiveScroll.destroy();
        };
    }, []);

    return (
        <div className='min-h-screen w-full bg-white text-black'>
          <Navbar/>
          <LandingPage/>
          <Marque />
          <About/>          
          <Eye />
          <Featured />
          <Footer />
        
        </div>
      )
}

export default Pages