"use client";
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import Marque from './Marque'
import About from './About'
import Eyes from './Eyes'
import Featured from './Featured'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll';




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
          <Eyes />
          <Featured />
          <Footer />
        </div>
      )
}

export default Pages