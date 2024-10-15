"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Utiliser usePathname

import { cn } from "@smartflow/ui";
import { Button } from "@smartflow/ui/button";

function ThomasSuperLink({
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
        className={cn({ "border-b-2 border-white": pathname == to })}
      >
        {children}
      </Link>
    </Button>
  );
}

export default function NavBar() {
  return (
    <div className="flex h-20 pl-3">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} className="mr-8"
      />
      <div className=" flex items-center justify-cente">
        <ThomasSuperLink to="/dashboard">Dashboard</ThomasSuperLink>
        <ThomasSuperLink to="/project">Project</ThomasSuperLink>
        <ThomasSuperLink to="/library">Library</ThomasSuperLink>
        <ThomasSuperLink to="/forum">Forum</ThomasSuperLink>
      </div>
    </div>
  );
}
