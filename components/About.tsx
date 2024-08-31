import React from 'react'

function About() {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.2"  className='font-font1 w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl '>

        <h1 className='font-font1 text-[3.5vw] leading-[3.5vw] tracking-normal'>Keizer is a strategic web agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
 
        <div className='w-full flex gap-5 border-t-[2px] mt-20 border-[#9eaa72]'>

          <div className='w-1/2'>
            <h1 className='text-[3.5vw] mt-5'>Our approch:</h1>
            <button className='px-6 flex gap-10 items-center py-4 mt-3 bg-zinc-900 rounded-full text-white uppercase'>Read more
              <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button> 
          </div>

          <div className='w-1/2 rounded-3xl h-[70vh] mt-5 bg-red-300'></div>

        </div>
    </div>
  )
}

export default About