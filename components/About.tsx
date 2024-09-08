import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <div className='font-font1 w-full px-20 pb-20 pt-3  rounded-tl-3xl rounded-tr-3xl '>

        <h1 className='font-font1 text-[3.4vw] leading-[3.5vw] '>Keizer is a strategic web agency for forward-thinking businesses that need to sell prod­ucts, ex­plain com­plex ideas.</h1>
 
        <div className='w-full flex gap-5 border-t-[2px] mt-20 border-[#9eaa72]'>

          <div className='w-1/2'>
            <h1 className='text-[3.5vw] mt-5'>Our services:</h1>
            <Link href={"/about"}>
            <button className='px-6 flex gap-10 items-center py-4 mt-3 bg-zinc-900 rounded-full text-white uppercase'>Read more
              <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button> 
            </Link>
          </div>

          <div className='w-1/2  h-[70vh] mt-5 '>
            <Image
            
              src="/Images/12.png" 
              height={1000}
              width={1000}
              alt="Animated Background"
              className="object-cover w-full h-full rounded-2xl"
          />
          
          </div>

        </div>
    </div>
  )
}

export default About