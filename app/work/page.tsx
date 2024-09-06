"use client"
import Cards from '@/components/Cards'
import Navbar from '@/components/Navbar'
import LocomotiveScroll from 'locomotive-scroll'
import React, { useEffect } from 'react'

function Page() {

  const project1 = {
    title: 'Project 1',
    imageUrl: 'https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png',
    tags: ['audio', 'copywriting', 'sales deck', 'slides design']
  };

  const project2 = {
    title: 'Project 2',
    imageUrl: 'https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg',
    tags: ['agency', 'company presentation']
  };

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className='bg-white text-black'>
      <Navbar />
      <div className='font-font1'>
        <h1 className='w-[70%] text-[3.5vw] leading-[3.5vw] tracking-normal pt-[12vh] pl-[2.5vw]'>
          Purpose driven, strategy-led presentations that people care about.
        </h1>
        <div className='pb-10'>
            <div>
          <Cards
            projectTitle1={project1.title}
            imageUrl1={project1.imageUrl}
            tags1={project1.tags}
            projectTitle2={project2.title}
            imageUrl2={project2.imageUrl}
            tags2={project2.tags}
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Page
