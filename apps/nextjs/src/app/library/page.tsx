import React, { useState } from "react";
import { NavBar } from "~/components/nav-bar";

function Library() {
  return (
    <>
      <NavBar page="Library"></NavBar>
      <div className="flex pt-16 px-8">
        <h2 className="ml-10 w-full text-xl text-stone-900 font-bold">
          Library
        </h2>
      </div>
    </>
  );
}

export default Library;
