//@ts-nocheck
import React from "react";
import Cards from "./Cards";

function Features() {

  const project1 = {
    title: 'Gold Rush',
    imageUrl: '/Images/19 (2).png',
    tags: ['Capital Market Investment', 'DeFi', 'Digital Marketing']
  };

  const project2 = {
    title: 'BONKPad',
    imageUrl: '/Images/19 (3).png',
    tags: ['DeFi', 'Crowdfunding']
  };

  return (
    <div  className="w-full py-20  font-font1">
      <div className="w-full border-b-[1.5px] border-zinc-400 pb-8 px-10">
        <h1 className="text-[8vh]">Featured projects</h1>
      </div>
       <div>
      <Cards
        projectTitle1={project1.title}
        imageUrl1={project1.imageUrl}
        tags1={project1.tags}
        projectTitle2={project2.title}
        imageUrl2={project2.imageUrl}
        tags2={project2.tags}
      />
    </div>

    </div>
  );
}

export default Features;
