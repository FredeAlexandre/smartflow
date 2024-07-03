import React from 'react';
import Link from "next/link"
import {Button} from "@smartflow/ui/button";
import { Icon } from "@iconify/react";

// Définir les types des props

interface HeaderProps {
  page: string;
}

export const NavBar: React.FC<HeaderProps> = ({page}) => {
  return (
    <div className="flex w-full h-20 bg-stone-900 px-8 items-center">
      <h1 className="text-3xl text-white font-bold">Smartflow</h1>
      <Link href="/dashboard">
        <Button className={`ml-20 mr-4 ${page === 'Dashboard' ? '' : 'bg-stone-900'}`}>Dashboard</Button>
      </Link>
      <Link href="/projects">
        <Button className={`ml-20 mr-4 ${page === 'Projects' ? '' : 'bg-stone-900'}`}>Projects</Button>
      </Link>
      <Link href="/library">
        <Button className={`ml-20 mr-4 ${page === 'Library' ? '' : 'bg-stone-900'}`}>Library</Button>
      </Link>
      <Link href="/documentation">
        <Button className={`ml-20 mr-4 ${page === 'Documentation' ? '' : 'bg-stone-900'}`}>Documentation</Button>
      </Link>
      <Link href="/help">
        <Button className={`ml-20 mr-4 ${page === 'Help' ? '' : 'bg-stone-900'}`}>Help</Button>
      </Link>
      <div className="flex h-full w-full justify-end items-center">
        <Icon icon="lucide:settings" className="text-white h-7 w-7" />
      </div>
    </div>
  );
};