//@ts-nocheck
"use client"
import Cards from '@/components/Cards'
import Navbar from '@/components/Navbar'
import LocomotiveScroll from 'locomotive-scroll'
import React, { useEffect } from 'react'

function Page() {

  const project1 = {
    title: 'GoldRush',
    imageUrl: '/Images/19 (2).png',
    tags: ['Capital Market Investment', 'DeFi', 'Digital Marketing'],
  };
  
  const project2 = {
    title: 'Project 2',
    imageUrl: '/Images/19 (3).png',
    tags: ['DeFi', 'Crowdfunding'],
  };
  
  // const project3 = {
  //   title: 'Project 3',
  //   imageUrl: '/Images/19 (1).png ',
  //   tags: ['audio', 'copywriting', 'sales deck', 'slides design'],
  // };
  
  // const project4 = {
  //   title: 'Project 4',
  //   imageUrl: '/Images/19 (3).png',
  //   tags: ['agency', 'company presentation'],
  // };
  
  // const project5 = {
  //   title: 'Project 5',
  //   imageUrl: '/Images/19 (3).png',
  //   tags: ['audio', 'copywriting', 'sales deck', 'slides design'],
  // };
  
  // const project6 = {
  //   title: 'Project 6',
  //   imageUrl: '/Images/19 (3).png',
  //   tags: ['agency', 'company presentation'],
  // };

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className='bg-white text-black'>
      <Navbar />
      <div className='leading-[7vw] text-[8.75vw] flex items-center uppercase tracking-normal text-8xl font-bold font-fontt pt-[16vh] pl-14'>
        WORK
      </div>
      <div className='border-t-2 border-black mt-20 mb-8'>

      </div>
      <div className='font-font1'>
        <h1 className='w-[70%] text-[3.5vw] leading-[3.5vw] tracking-normal  pl-[2.5vw]'>
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
          {/* <Cards
            projectTitle3={project3.title}
            imageUrl3={project3.imageUrl}
            tags3={project3.tags}
            projectTitle4={project4.title}
            imageUrl4={project4.imageUrl}
            tags4={project4.tags}
          />
          <Cards
            projectTitle5={project5.title}
            imageUrl5={project5.imageUrl}
            tags5={project5.tags}
            projectTitle6={project6.title}
            imageUrl6={project6.imageUrl}
            tags6={project6.tags}
          /> */}
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default Page
