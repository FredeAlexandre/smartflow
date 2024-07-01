import { IoIosSettings, IoIosAdd } from "react-icons/io";
import {Button} from "@/components/ui/button";
import React, { useState } from 'react';

function Dashboard() {

  const [isColored, setIsBlue] = useState(1);

  const toggleColor = (numberColored: number) => {
    setIsBlue(numberColored);
  };

  return (
    <>
    <div className="flex w-full h-20 bg-slate-950 px-8 items-center">
      <h1 className="text-3xl text-white font-bold">Smartflow</h1>
      <Button className={`ml-20 mr-4 ${isColored === 1 ? '' : 'bg-slate-950'}`} onClick={() => toggleColor(1)}>Dashboard</Button>
      <Button className={`ml-20 mr-4 ${isColored === 2 ? '' : 'bg-slate-950'}`} onClick={() => toggleColor(2)}>Projects</Button>
      <Button className={`ml-20 mr-4 ${isColored === 3 ? '' : 'bg-slate-950'}`} onClick={() => toggleColor(3)}>Library</Button>
      <Button className={`ml-20 mr-4 ${isColored === 4 ? '' : 'bg-slate-950'}`} onClick={() => toggleColor(4)}>Documentation</Button>
      <Button className={`ml-20 mr-4 ${isColored === 5 ? '' : 'bg-slate-950'}`} onClick={() => toggleColor(5)}>Help</Button>
      <div className="flex h-full w-full justify-end items-center">
        <IoIosSettings className="text-white h-7 w-7"></IoIosSettings>
      </div>
    </div>
    <div className="flex pt-16 px-8">
      <h2 className="ml-10 w-full text-xl text-slate-950 font-bold">Projects</h2>
    </div>
    <div className="flex items-center relative p-8">
      <div className="w-full h-full flex flex-row overflow-x-scroll pb-2">
        <div className="flex justify-center items-center border-2 rounded-md border-slate-950 w-70 h-50 ml-8 shrink-0">
          <IoIosAdd className="color-slate-950 w-10 h-10"></IoIosAdd>
        </div>
        <div className="flex justify-center items-center border-2 rounded-md border-slate-950 w-70 h-50 ml-8 shrink-0">
          <IoIosAdd className="color-slate-950 w-10 h-10"></IoIosAdd>
        </div>
        <div className="flex justify-center items-center border-2 rounded-md border-slate-950 w-70 h-50 ml-8 shrink-0">
          <IoIosAdd className="color-slate-950 w-10 h-10"></IoIosAdd>
        </div>
        <div className="flex justify-center items-center border-2 rounded-md border-slate-950 w-70 h-50 ml-8 shrink-0">
          <IoIosAdd className="color-slate-950 w-10 h-10"></IoIosAdd>
        </div>
        <div className="flex justify-center items-center border-2 rounded-md border-slate-950 w-70 h-50 ml-8 shrink-0">
          <IoIosAdd className="color-slate-950 w-10 h-10"></IoIosAdd>
        </div>
        <div className="flex justify-center items-center border-2 rounded-md border-slate-950 w-70 h-50 ml-8 shrink-0">
          <IoIosAdd className="color-slate-950 w-10 h-10"></IoIosAdd>
        </div>
        <div className="flex justify-center items-center border-2 rounded-md border-slate-950 w-70 h-50 ml-8 shrink-0">
          <IoIosAdd className="color-slate-950 w-10 h-10"></IoIosAdd>
        </div>
      </div>
    </div>

    <div className="flex pt-16 px-8">
      <h2 className="ml-10 w-full text-xl text-slate-950 font-bold">Library</h2>
    </div>
    <div className="flex items-center relative p-8">
      <div className="w-full h-full flex flex-row overflow-x-scroll no-scrollbar">
        <div className="flex justify-center items-center border-2 rounded-md border-slate-950 w-70 h-50 ml-8 shrink-0">
          <IoIosAdd className="color-slate-950 w-10 h-10"></IoIosAdd>
        </div>
        <div className="flex justify-center items-center border-2 rounded-md border-slate-950 w-70 h-50 ml-8 shrink-0">
          <IoIosAdd className="color-slate-950 w-10 h-10"></IoIosAdd>
        </div>
        <div className="flex justify-center items-center border-2 rounded-md border-slate-950 w-70 h-50 ml-8 shrink-0">
          <IoIosAdd className="color-slate-950 w-10 h-10"></IoIosAdd>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
