"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BellIcon, ChevronDownIcon } from "lucide-react";

import { cn } from "@smartflow/ui";
import { Badge } from "@smartflow/ui/badge";
import { Button } from "@smartflow/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@smartflow/ui/dropdown-menu";

function SuperLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Button asChild variant="ghost" className="rounded-none">
      <Link
        href={to}
        className={cn({ "border-b-2 border-white": pathname === to })}
      >
        {children}
      </Link>
    </Button>
  );
}

interface NavbarProps {
  links: { label: string; path: string }[]; // Structure pour les liens
}

export default function Navbar({ links }: NavbarProps) {
  const [selectedProject, setSelectedProject] = useState("Project 1");
  const projects = ["Project 1", "Project 2", "Project 3"];

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <div>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="mr-8"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex cursor-pointer items-center space-x-2">
            <span>{selectedProject}</span>
            <Badge className="bg-gray-500 text-white">Hobby</Badge>
            <ChevronDownIcon className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-black">
            {projects.map((project, index) => (
              <DropdownMenuItem key={index} onClick={() => setSelectedProject(project)}>
                <Link href={"/overview"}>{project}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="ml-8 flex h-20 pl-3">
        <div className="flex items-center justify-center space-x-8">
          {links.map((link, index) => (
            <SuperLink key={index} to={link.path}>
              {link.label}
            </SuperLink>
          ))}
        </div>
      </div>

      <div className="ml-auto flex items-center space-x-4 pr-5">
        <button className="hover:text-gray-300">Help</button>
        <button className="hover:text-gray-300">Docs</button>
        <div className="relative">
          <BellIcon className="h-6 w-6 cursor-pointer" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="h-8 w-8 cursor-pointer rounded-full bg-gradient-to-r from-green-400 to-blue-500"></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-black">
            <DropdownMenuItem>
              <Link href="/profile_settings" className="block h-full w-full">
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
