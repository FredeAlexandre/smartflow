"use client"

import { Icon } from "@iconify/react";
import React, { useState } from 'react';
import { NavBar } from "~/components/nav-bar"
import { ProjectBox } from "./_components/project-box";

function Dashboard() {

  const [boxProjectCount, setBoxCount] = useState(3);
  const [boxLibraryCount, setBoxLibraryCount] = useState(1);

  const addBox = () => {
    setBoxCount(boxProjectCount + 1);
    console.log(boxProjectCount);
  };

  const addBoxLibrary = () => {
    setBoxLibraryCount(boxLibraryCount + 1);
  };

  const removeBox = () => {
    setBoxCount(boxProjectCount > 0 ? boxProjectCount - 1 : 0);
  };

  return (
    <>
    <NavBar page="Dashboard"></NavBar>
    <div className="flex pt-16 px-8">
      <h2 className="ml-10 w-full text-xl text-stone-900 font-bold">Projects</h2>
    </div>
    <div className="flex items-center p-8">
      <div className="w-full h-full flex flex-row overflow-x-scroll pb-2">
        {Array.from({ length: boxProjectCount }).map((_, index) => (
          <ProjectBox 
            key={index} 
            imageSrc={"/nft-singes.jpg"} 
            altText="logo-project" 
            title={`NFT Deployment ${index + 1}`} 
          />
        ))}
        <div className="flex justify-center items-center border-2 rounded-md border-stone-900 w-72 h-52 ml-8 shrink-0">
          <Icon icon="lucide:plus" className="color-stone-900 w-10 h-10" onClick={addBox}/>
        </div>
      </div>
    </div>

    <div className="flex pt-16 px-8">
      <h2 className="ml-10 w-full text-xl text-stone-900 font-bold">Library</h2>
    </div>
    <div className="flex items-center relative p-8">
      <div className="w-full h-full flex flex-row overflow-x-scroll no-scrollbar">
        {Array.from({ length: boxLibraryCount }).map((_, index) => (
          <ProjectBox 
            key={index} 
            imageSrc={"/nft-singes.jpg"} 
            altText="logo-library" 
            title={`NFT Template ${index + 1}`} 
          />
        ))}
        <div className="flex justify-center items-center border-2 rounded-md border-stone-900 w-72 h-52 ml-8 shrink-0">
          <Icon icon="lucide:plus" className="color-stone-900 w-10 h-10" onClick={addBoxLibrary}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
