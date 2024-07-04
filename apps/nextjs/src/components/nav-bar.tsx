import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { Button } from "@smartflow/ui/button";

// Définir les types des  props

interface HeaderProps {
  page: string;
}

export const NavBar: React.FC<HeaderProps> = ({ page }) => {
  return (
    <div className="flex h-20 w-full items-center bg-stone-900 px-8">
      <Link href="/">
        <h1 className="text-3xl font-bold text-white">Smartflow</h1>
      </Link>
      <div className="ml-20 flex gap-6">
        <Link href="/dashboard">
          <Button className={`${page === "Dashboard" ? "" : "bg-stone-900"}`}>
            <Icon icon="lucide:layout-dashboard" className="mr-1" />
            Dashboard
          </Button>
        </Link>
        <Link href="/projects">
          <Button className={`${page === "Projects" ? "" : "bg-stone-900"}`}>
            <Icon icon="lucide:folder-open" className="mr-1" />
            Projects
          </Button>
        </Link>
        <Link href="/library">
          <Button className={`${page === "Library" ? "" : "bg-stone-900"}`}>
            <Icon icon="lucide:square-library" className="mr-1" />
            Library
          </Button>
        </Link>
      </div>
      <div className="flex h-full w-full items-center justify-end">
        <Icon icon="lucide:settings" className="h-7 w-7 text-white" />
      </div>
    </div>
  );
};
