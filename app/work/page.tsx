"use client"
import Cards from '@/components/Cards'
import Navbar from '@/components/Navbar'
import LocomotiveScroll from 'locomotive-scroll'
import React, { useEffect } from 'react'

function page() {

  useEffect( ()=> {
    const locomotiveScroll = new LocomotiveScroll();

    return  ()=> {
      locomotiveScroll.destroy();
    };
  },[]);

  return (
    <div className='bg-white text-black '>
      <Navbar />
      <div className='font-font1'>
    
          <h1 className='w-[70%] text-[3.5vw] leading-[3.5vw] tracking-normal pt-[12vh]  pl-[2.5vw] '>
          Purpose driven, strategy-led presentations
          that people care about.
          </h1>
          <div className='pb-10'>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          
        
        
      </div>
    </div>
  )
}

export default page