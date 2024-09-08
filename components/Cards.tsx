//@ts-nocheck
import React from 'react';
import Image from 'next/image';

function Cards({ projectTitle1, projectTitle2, imageUrl1, imageUrl2, tags1 = [], tags2 = [] }) {
  return (
    <div className="w-full px-10 pt-14 flex items-center justify-center gap-4 relative">
      {/* First Project */}
      <div className="w-1/2">
        <div className="flex gap-5 items-center">
          <div className="bg-zinc-800 rounded-full w-[12px] h-[12px]"></div>
          <p>{projectTitle1}</p>
        </div>
        <div className="w-full mt-7 rounded-xl overflow-hidden">
          <Image
            height={1000}
            width={1000}
            src={imageUrl1}
            alt="Project Image"
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center">
          {tags1.length > 0 ? (
            tags1.map((item, idx) => (
              <p
                key={idx}
                className="border-[1px] transition-all duration-300 ease-in-out border-zinc-900 mt-4 mr-3 px-4 py-1 text-sm uppercase rounded-3xl cursor-pointer hover:bg-zinc-800 hover:text-zinc-200"
              >
                {item}
              </p>
            ))
          ) : (
            <p className="mt-4 text-sm">No tags available</p>
          )}
        </div>
      </div>

      {/* Second Project */}
      <div className="w-1/2">
        <div className="flex gap-5 items-center">
          <div className="bg-zinc-800 rounded-full w-[12px] h-[12px]"></div>
          <p>{projectTitle2}</p>
        </div>
        <div className="w-full mt-7 rounded-xl overflow-hidden">
          <Image
            height={1000}
            width={1000}
            src={imageUrl2}
            alt="Project Image"
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-center">
          {tags2.length > 0 ? (
            tags2.map((item, idx) => (
              <p
                key={idx}
                className="border-[1px] transition-all duration-300 ease-in-out border-zinc-900 mt-4 mr-3 px-4 py-1 text-sm uppercase rounded-3xl cursor-pointer hover:bg-zinc-800 hover:text-zinc-200"
              >
                {item}
              </p>
            ))
          ) : (
            <p className="mt-4 text-sm">No tags available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
