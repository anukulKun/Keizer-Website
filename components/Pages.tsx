"use client";
import React, { useEffect } from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import About from './About'
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
        <div className='min-h-screen w-full bg-[#e0e0e0] text-black'>
          <Navbar/>
          <LandingPage/>
          <About/>          
          <Featured />
          <Footer />
        
        </div>
      )
}

export default Pages