"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { NavBar } from "~/components/nav-bar";
import { ProjectBox } from "./_components/project-box";
import { ProjectCreator } from "./_components/project-creator";

function Dashboard() {
  interface Project {
    name: string;
    photo: string; // URL ou chemin de l'image
  }

  const [projects, setProjects] = useState<Project[]>([
    { name: "Project 1", photo: "/nft-singes.jpg" },
    { name: "Project 2", photo: "/nft-singes.jpg" },
  ]);

  const [library, setLibrary] = useState<Project[]>([
    { name: "Library 1", photo: "/nft-singes.jpg" },
    { name: "Library 2", photo: "/nft-singes.jpg" },
    { name: "Library 3", photo: "/nft-singes.jpg" },
    { name: "Library 4", photo: "/nft-singes.jpg" },
    { name: "Library 5", photo: "/nft-singes.jpg" },
  ]);

  const addProject = (projectName: string, projectPhoto: string) => {
    const newProject: Project = { name: projectName, photo: projectPhoto };
    setProjects([...projects, newProject]);
  };

  const OnSubmitProject = (name: string) => {
    addProject(name, "/nft-singes.jpg");
  };

  return (
    <>
      <NavBar page="Dashboard"></NavBar>
      <div className="flex px-8 pt-16">
        <Link href="/projects">
          <h2 className="ml-10 w-full text-xl font-bold text-stone-900">
            Projects
          </h2>
        </Link>
      </div>
      <div className="flex items-center p-8">
        <div className="flex h-full w-full flex-row overflow-x-scroll pb-2">
          {projects.map((project, index) => (
            <ProjectBox
              key={index}
              imageSrc={project.photo}
              altText={project.name}
              title={project.name}
            />
          ))}
          <ProjectCreator onSubmitProject={OnSubmitProject} />
        </div>
      </div>

      <div className="flex px-8 pt-16">
        <Link href="/library">
          <h2 className="ml-10 w-full text-xl font-bold text-stone-900">
            Library
          </h2>
        </Link>
      </div>
      <div className="relative flex items-center p-8">
        <div className="no-scrollbar flex h-full w-full flex-row overflow-x-scroll">
          {library.map((project, index) => (
            <ProjectBox
              key={index}
              imageSrc={project.photo}
              altText={project.name}
              title={project.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
