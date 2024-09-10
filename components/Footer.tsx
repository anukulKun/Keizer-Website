import Image from 'next/image'
import React from 'react'
import logo from '@/public/Logo/meaw3.svg'
function Footer() {
  return (

    <div className='w-full h-screen p-20 flex font-fontt '>

      <div className='w-1/2 h-full flex flex-col justify-between'>

          <div className='heading'>
            <h1 className='text-[10vw] uppercase leading-none -mb-10 '>Eye-</h1>
            <h1 className='text-[10vw] uppercase leading-none -mb-10'>opening</h1>
          </div>

          <Image className='' width={100} height={100} alt='logo' src={logo}/>

      </div>

      <div className='w-1/2 mr-5 h-full flex flex-col'>

        <h1 className='flex  text-[10vw] uppercase leading-none -mb-10 '>presentations</h1>

        <div className="debt flex flex-col mt-28 leading-none text-[1.1vw] font-light font-font1">
              <div className='uppercase mb-5'>S:</div>
              {[
                { name: "Instagram", url: "#" },
                { name: "Twitter", url: "https://x.com/Keizerwork" },
                { name: "LinkedIn", url: "#" },
                { name: "GitHub", url: "https://www.github.com" }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="underline gap-9 capitalize font-light py-2"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ))}
            </div>

        <div className="debt flex flex-col mt-20 leading-none text-[1.1vw] font-light font-font1">
            <div className='mb-5'>E:</div>
            {["keizerworks@gmail.com"].map((item, index) =>(
                <a key={index} className={`underline gap-9 font-light py-2`}>{item}</a>
            ) )}
        </div>

      </div>
    </div>
  )
}

export default Footer