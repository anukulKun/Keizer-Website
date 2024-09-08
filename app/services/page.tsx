"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function Page() {

    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll();

        return () => {
            locomotiveScroll.destroy();
        };
    }, []); 

    return (
        <div className='bg-white text-black'>
            <Navbar />
            <div className=' mb-8 pt-[16vh] pl-14'>
                <h1 className="leading-[7vw] text-[8.75vw] flex items-center uppercase tracking-normal text-8xl font-bold font-fontt">
                    Services
                </h1>
            </div>
                 

            

            <div className='border-t-2 border-black mt-20 mb-8'></div>

            <div>
                <h1 className='font-font1 pl-[4vw] text-[3.5vw] leading-[3.5vw] tracking-normal pt-[2vh]'>
                    We create eye-catching and eye-opening presentations that educate, inspire, and influence action.
                </h1>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
