"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Page() {

    useEffect(() => {
        const locomotiveScroll = new LocomotiveScroll();

        return () => {
            locomotiveScroll.destroy();
        };
    }, []); 

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);
    const [isVisible7, setIsVisible7] = useState(false);

    const listVariants = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className='bg-[#e0e0e0] text-black'>
            <Navbar />
            <div className=' mb-8 pt-[16vh] pl-14'>
                <h1 className="leading-[7vw] text-[8.75vw] flex items-center uppercase tracking-normal text-8xl font-bold font-fontt">
                    Services
                </h1>
            </div>            

            

            <div className='border-t-2 border-black mt-20 mb-8'></div>

            <div>
                <h1 className='font-font1 pl-[4vw] text-[3.5vw] leading-[3.5vw] tracking-normal pt-[2vh] '>
                    We create eye-catching and eye-opening presentations that educate, inspire, and influence action.
                </h1>
            </div>

            <div className='border-t-2 border-black mt-16 mb-8'></div>
            <div  className='cursor-pointer ' onClick={() => setIsVisible1(!isVisible1)}>
                <h1 className='font-font1 pl-[4vw] text-[3.5vw] leading-[3.5vw] tracking-normal pt-[2vh] '> 
                Web2 Development
                </h1>
                {isVisible1 && (
                    < motion.ul 
                    className='mt-8 pl-[4vw]'
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={listVariants}
                    >
                    <li>Custom Websites & Web Apps</li>
                    <li>E-commerce Solutions</li>
                    <li>CRM Systems</li>
                    </motion.ul>
                )}

            </div>
            <div className='border-t-2 border-black mt-20 mb-8'></div>
            <div className='cursor-pointer ' onClick={() => setIsVisible2(!isVisible2)}>
                <h1 className='font-font1 pl-[4vw] text-[3.5vw] leading-[3.5vw] tracking-normal pt-[2vh] '> 
                Web3 Development
                </h1>
                {isVisible2 && (
                    < motion.ul 
                    className='mt-8 pl-[4vw]'
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={listVariants}
                    >
                    <li>Smart Contracts</li>
                    <li>NFT & Token Launches</li>
                    <li>DeFi Platforms</li>
                    <li>Games</li>
                    </motion.ul>
                )}
            </div>
            <div className='border-t-2 border-black mt-20 mb-8'></div>
            <div  className='cursor-pointer ' onClick={() => setIsVisible3(!isVisible3)}>
                <h1 className='font-font1 pl-[4vw] text-[3.5vw] leading-[3.5vw] tracking-normal pt-[2vh]'> 
                UI/UX Design
                </h1>
                {isVisible3 && (
                    < motion.ul 
                    className='mt-8 pl-[4vw]'
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={listVariants}
                    >
                    <li>Wireframing & Prototyping</li>
                    <li>User Research & Testing</li>
                    </motion.ul>
                )}
            </div>
            <div className='border-t-2 border-black mt-20 mb-8'></div>
            <div  className='cursor-pointer ' onClick={() => setIsVisible4(!isVisible4)}>
                <h1 className='font-font1 pl-[4vw] text-[3.5vw] leading-[3.5vw] tracking-normal pt-[2vh]'> 
                Full-Stack Development
                </h1>
                {isVisible4 && (
                    < motion.ul 
                    className='mt-8 pl-[4vw]'
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={listVariants}
                    >
                    <li>Front-end Development</li>
                    <li>Back-end Solutions</li>
                    </motion.ul>
                )}
            </div>
            <div className='border-t-2 border-black mt-20 mb-8'></div>
            <div  className='cursor-pointer ' onClick={() => setIsVisible5(!isVisible5)}>
                <h1 className='font-font1 pl-[4vw] text-[3.5vw] leading-[3.5vw] tracking-normal pt-[2vh]'> 
                Game Development
                </h1>
                {isVisible5 && (
                    < motion.ul 
                    className='mt-8 pl-[4vw]'
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={listVariants}
                    >
                    <li>Mobile & Web Games</li>
                    <li>Unity & Unreal Engine</li>
                    </motion.ul>
                )}
            </div>
            <div className='border-t-2 border-black mt-20 mb-8'></div>
            <div  className='cursor-pointer ' onClick={() => setIsVisible6(!isVisible6)}>
                <h1 className='font-font1 pl-[4vw] text-[3.5vw] leading-[3.5vw] tracking-normal pt-[2vh]'> 
                Animations & Motion Graphics
                </h1>
                {isVisible6 && (
                    < motion.ul 
                    className='mt-8 pl-[4vw]'
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={listVariants}
                    >
                    <li>Brand Animations</li>
                    <li>UI/UX Animations</li>
                    <li>Unity Animations</li>
                    </motion.ul>
                )}
            </div>
            <div className='border-t-2 border-black mt-20 mb-8'></div>
            <div  className='cursor-pointer ' onClick={() => setIsVisible7(!isVisible7)}>
                <h1 className='font-font1 pl-[4vw] text-[3.5vw] leading-[3.5vw] tracking-normal pt-[2vh]'> 
                Consulting & Strategy
                </h1>
                {isVisible7 && (
                    < motion.ul 
                    className='mt-8 pl-[4vw]'
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={listVariants}
                    >
                    <li>Marketing & Growth</li>
                    </motion.ul>
                )}
            </div>
            <div className='border-t-2 border-black mt-20 mb-8'></div>
            <Footer />
        </div>
    );
}

export default Page;
