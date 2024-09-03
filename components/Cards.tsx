import React from 'react'
import Image from 'next/image'

function Cards() {
  return (
    <div>
             <div className="w-full px-10 pt-14 flex items-center justify-center gap-4  relative">
        <div className="w-1/2">
          <div className="flex gap-5 items-center">
            <div className="bg-zinc-800 rounded-full w-[12px] h-[12px]"></div>
            <p>Project 1</p>
          </div>
          <div className="w-full mt-7 rounded-xl overflow-hidden">
            <Image
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              alt="Images"
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center">
            {["audio", "copywriting", "sales deck", "slides design"].map(
              (item, idx) => (
                <p
                  key={idx}
                  className="border-[1px] transition-all duration-300 ease-in-out border-zinc-900 mt-4 mr-3 px-4 py-1 text-sm uppercase rounded-3xl cursor-pointer hover:bg-zinc-800 hover:text-zinc-200 "
                >
                  {item}
                </p>
              )
            )}
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex gap-5 items-center">
            <div className="bg-zinc-800 rounded-full w-[12px] h-[12px]"></div>
            <p>Project 2</p>
          </div>
          <div className="w-full mt-7 rounded-xl overflow-hidden">
            <Image
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
              alt="Images"
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center">
            {["agency", "company presentation"].map((item, idx) => (
              <p
                key={idx}
                className="border-[1px] border-zinc-900 mt-4 mr-3 px-4 py-1 text-sm uppercase rounded-3xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:text-zinc-200 "
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards