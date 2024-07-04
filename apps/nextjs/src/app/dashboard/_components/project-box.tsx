import React from "react";
import Link from "next/link";

export const ProjectBox = ({
  imageSrc,
  altText,
  title,
}: {
  imageSrc: string;
  altText: string;
  title: string;
}) => {
  return (
    <Link href="/contracts">
      <div className="ml-8 flex h-52 w-72 shrink-0 flex-col items-center rounded-md border-2 border-stone-900">
        <img className="h-4/5 w-full shrink-0" src={imageSrc} alt={altText} />
        <h3 className="mt-2 font-bold text-stone-900">{title}</h3>
      </div>
    </Link>
  );
};
