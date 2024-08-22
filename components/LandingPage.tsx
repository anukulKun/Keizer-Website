import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className=' h-screen w-full pt-2'>

        <div className='textstructure mt-32 px-20'>
            {["We create", "Eye-Opening", "presentations"].map((item, index)=>{
                return (
                    <div key={index} className="masker">
                        <div className="w-fit flex">

                            {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "8.75vw"}} transition={{ease: [0.74, 0, 0.24, 1], duration: 1}} className='mr-[1vw] rounded-md w-[8.75vw] bg-red-400 relative top-[1.2vw] h-[5.5vw]'></motion.div>)}

                            <h1 className="leading-[7vw] text-[8.75vw] flex items-center uppercase tracking-normal text-8xl font font-bold font1">{item}
                            </h1>

                        </div>
                    </div>
            );
            })}           
        </div> 

        <div className='border-t-2 border-black font2 mt-32 flex justify-between items-center px-20 py-5'>
            {["For Public and Private Companies", "From the First Pitch to IPO"].map((item, index)=>
                <p key={index} className='text-md font-light tracking-normal leading-none'>{item}</p>
            )}
            <div className='start flex gap-2'>
                <div className='px-4 py-[1.75px] uppercase font-light text-sm border-[1px] border-black rounded-full flex justify-center items-center tracking-normal'>Start the project</div>
                <div className='w-8 h-8 flex items-center justify-center border-[1px] border-black rounded-full '>
                    <GoArrowUpRight />
                </div>
            </div>
        </div>

    </div>
  )
}

export default LandingPage