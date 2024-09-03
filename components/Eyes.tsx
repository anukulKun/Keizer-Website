//@ts-nocheck
"use client"

import React, { useEffect, useState } from 'react';

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-section data-scroll-speed= "0.4" className='relative w-full h-full '>
                <div className='top-1/2 flex gap-10 left-1/2 -translate-x-[50%] -translate-y-1/2 absolute'>
                    <div className='w-[15vw] flex items-center justify-center h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative items-center justify-center w-[9vw] h-[9vw] bg-zinc-900 rounded-full'>
                            <div
                                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[1.3vw]'
                            >
                                <div className='w-[1.3vw] h-[1.3vw] bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] flex items-center justify-center h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative items-center justify-center w-[9vw] h-[9vw] bg-zinc-900 rounded-full'>
                            <div
                                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[1.3vw]'
                            >
                                <div className='w-[1.3vw] h-[1.3vw] bg-zinc-100 rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
