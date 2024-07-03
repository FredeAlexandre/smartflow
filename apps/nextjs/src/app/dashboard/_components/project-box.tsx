import React from 'react';

// Définir les types des props
interface ProjectBoxProps {
  imageSrc: string;
  altText: string;
  title: string;
}

export const ProjectBox: React.FC<ProjectBoxProps> = ({ imageSrc, altText, title }) => {
  return (
    <div className="flex flex-col items-center border-2 rounded-md border-stone-900 w-72 h-52 ml-8 shrink-0">
      <img className="h-4/5 w-full shrink-0" src={imageSrc} alt={altText} />
      <h3 className="text-stone-900 mt-2 font-bold">{title}</h3>
    </div>
  );
};
