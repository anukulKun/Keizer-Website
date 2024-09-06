'use client'
import { motion } from 'framer-motion';
import React from 'react';

function Marque() {
  return (
    <div  className=' w-full py-24 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl text-white'>
        <div className="text border-t-2 border-[#e7e7e7] border-b-2 pb-10 flex whitespace-nowrap overflow-hidden 
        ">
            <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear", duration: 10}} className='text-[24vw] leading-[0.6] font-fontt uppercase pr-20'>We are Keizer</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear", duration: 10}} className='text-[24vw] leading-[0.6] font-fontt uppercase pr-20'>We are Keizer</motion.h1>
            
        </div>
    </div>
  );
}

export default Marque