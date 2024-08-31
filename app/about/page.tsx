"use client"
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import { motion } from 'framer-motion';
import { GoArrowUpRight } from "react-icons/go";

function page() {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => {
        locomotiveScroll.destroy();
    };
}, []);


  return (
    <div className='w-full bg-white text-black font-font1'>
      <Navbar />

      <div>

      <div className='contact w-full'>
            <div className='textstructure pt-32 pl-14'>
                {["We are", "Keizer design"].map((item, index)=>{
                    return (
                        <div key={index} className="masker">
                            <div className="w-fit flex">

                                {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "8.75vw"}} transition={{ease: [0.74, 0, 0.24, 1], duration: 1}} className='mr-[1vw] rounded-md w-[8.75vw] bg-red-400 relative top-[1.2vw] h-[5.5vw]'></motion.div>)}

                                <h1 className="leading-[7vw] text-[8.75vw] flex items-center uppercase tracking-normal text-8xl font-bold font-fontt">{item}
                                </h1>

                            </div>
                        </div>
                );
                })}           
            </div> 
      </div>

      <div className='border-t-2 border-black mt-20 '>
        <div className='flex mt-[2vh]'>

        <div className='w-1/2 pl-12'>
          <h1>About us</h1>
        </div>

        <div className='res5 w-1/2 flex'>
        <div className='writting w-1/3'>
          <h1>
          In Ukrainian, ochi - means eyes. It's not just a beautiful word, but our philosophy. Almost everything that needs to be communicated is better shown than explained.
          <br/>
          <br/>          
          We believe a great presentation evokes interest and drives business results far better than any saying can. Hence, we founded ochi to help you persuade colleagues and clients by creating eye-opening presentations.
          </h1>
        </div>
        
        <div>

          <div className="start flex gap-2 cursor-pointer group">
                <div className="px-4 py-[1.75px] uppercase font-light text-sm border-[1px] border-black rounded-full flex justify-center items-center tracking-normal group-hover:bg-zinc-800 group-hover:text-zinc-200 transition-all duration-300 ease-in-out">
                    Our works
                </div>
                <div className="w-8 h-8 flex items-center justify-center border-[1px] border-black rounded-full group-hover:bg-zinc-800 group-hover:text-zinc-200 transition-all duration-300 ease-in-out">
                    <GoArrowUpRight />
                </div>
          </div>
          </div>

        </div>

        

      </div>
      </div>

      <div className='w-[60%]'>
        <h1 className='font-font1 text-[3.5vw] leading-[3.5vw] tracking-normal ml-14'>We save businesses from ugly and ineffective presentations.</h1>

      </div>

      <div className='flex border-t-2 border-black mt-14 '>

        <div className='w-1/2 pl-14 mt-[2vh]'>
            <h1>We are keizer design:</h1>
        </div>

        <div className=' w-1/2  flex'>
          <div className='writting w-1/3'>

            <h1>
              The team of designers, storytellers, and passionate collaborators, who work together to create industry-shifting presentations that win people's hearts and minds.
            <br/>   
            <br/>          
              And we strive to become one of the most recognizable & influential presentation agencies of the time who does that.
            <br/>
            </h1>

          </div>
        </div>
      </div>

      </div>


    </div>
  )
}

export default page