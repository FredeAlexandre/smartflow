import { Link } from "@tanstack/react-router";
import { BellIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";

import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

function SuperLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Button asChild variant="ghost" className="rounded-none">
      <Link to={to} activeProps={{ className: "border-white border-b-2" }}>
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
          <img
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
            {projects.map((project) => (
              <DropdownMenuItem
                key={project}
                onClick={() => setSelectedProject(project)}
              >
                <Link href={"/overview"}>{project}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="ml-8 flex h-20 pl-3">
        <div className="flex items-center justify-center space-x-8">
          {links.map((link) => (
            <SuperLink key={link.path} to={link.path}>
              {link.label}
            </SuperLink>
          ))}
        </div>
      </div>

      <div className="ml-auto flex items-center space-x-4 pr-5">
        <button type="button" className="hover:text-gray-300">
          Help
        </button>
        <button type="button" className="hover:text-gray-300">
          Docs
        </button>
        <div className="relative">
          <BellIcon className="h-6 w-6 cursor-pointer" />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="h-8 w-8 cursor-pointer rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
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
