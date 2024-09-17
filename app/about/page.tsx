"use client";
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from 'framer-motion';
import { GoArrowUpRight } from "react-icons/go";
import Footer from '@/components/Footer';
import Image from 'next/image'; 
import Link from 'next/link';

function Page() {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
        locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className='w-full bg-[#e0e0e0] text-black font-font1'>
      <Navbar />

      <div>
        <div className='design w-full'>
          <div className='textstructure pt-[16vh] pl-14'>
            {["We are", "Keizer design"].map((item, index) => (
              <div key={index} className="masker">
                <div className="w-fit flex">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "8.75vw" }}
                      transition={{ ease: [0.74, 0, 0.24, 1], duration: 1 }}
                      className='mr-[1vw] relative top-[1.2vw] h-[5.5vw]'
                    >
                      <Image
                        src="/Images/79.png" 
                        height={1000}
                        width={1000}
                        alt="Animated Background"
                        className="object-cover w-full h-full rounded-2xl"
                      />
                    </motion.div>
                  )}
                  <h1 className="leading-[7vw] text-[8.75vw] flex items-center uppercase tracking-normal text-8xl font-bold font-fontt">{item}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='border-t-2 border-black mt-20 mb-12'>

        <div className='w-[60%]'>
          <h1 className='font-font1 text-[3.5vw] leading-[3.5vw] tracking-normal ml-14 mt-10 mb-10'>
            We save businesses from ugly and ineffective presentations.
          </h1>
        </div>
          <div className='flex mt-[2vh]'>
            <div className='w-1/2 pl-14'>
              <h1>About us</h1>
            </div>
            <div className='w-1/2 flex justify-between'>
            
              <div className='writting w-[20vw]'>
              <h1>
                  At Keizer, we are visionaries who craft solutions for the modern digital age. Whether it&apos;s a Web2 or Web3 project, we believe in delivering designs that speak louder than words.
                  <br />
                  <br />
                  Our approach goes beyond mere aesthetics—it&apos;s about creating functional, intuitive experiences that captivate users and drive results. From apps and websites to e-commerce platforms, CRM systems, and even meme coin pages, we specialize in building innovative solutions that cater to all your digital needs.
                </h1>

              </div>
              <Link href="/work">
              <div className='pr-14'>
                <div className="start cursor-pointer flex gap-2  group">
                  <div className="px-4 py-[1.75px] uppercase font-light text-sm border-[1px] border-black rounded-full flex justify-center items-center tracking-normal group-hover:bg-zinc-800 group-hover:text-zinc-200 transition-all duration-300 ease-in-out">
                    Our works
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center border-[1px] border-black rounded-full group-hover:bg-zinc-800 group-hover:text-zinc-200 transition-all duration-300 ease-in-out">
                    <GoArrowUpRight />
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className='flex border-t-2 border-black mt-14'>
      </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
