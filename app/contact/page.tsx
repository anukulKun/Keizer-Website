"use client";
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Form from '@/components/Form';
import LocomotiveScroll from 'locomotive-scroll';
import Image from 'next/image';

function Page() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className='w-full bg-white text-black'>
      <Navbar />
      <div className='contact w-full'>
        <div className='textstructure pt-32 pl-14'>
          {["Let's start", "a project together"].map((item, index) => (
            <div key={index} className="masker">
              <div className="w-fit flex">
                {index === 0 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8.75vw" }}
                    transition={{ ease: [0.74, 0, 0.24, 1], duration: 1 }}
                    className='mr-[1vw] rounded-md w-[8.75vw] relative top-[1.2vw] h-[5.5vw]'
                  >
                  <Image
                              src="/Images/52.png" 
                              height={1000}
                              width={1000}
                              alt="Animated Background"
                              className="object-cover w-full h-full rounded-2xl"
                          />
        
                  </motion.div>
                )}
                <h1 className="leading-[7vw] text-[8.75vw] flex items-center uppercase tracking-normal text-8xl font-bold font-fontt">
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full font-font1 pl-14 pt-20'>
        <h1>Fill the form below:</h1>
      </div>

      <div>
        <Form />
      </div>
    </div>
  );
}

export default Page;
