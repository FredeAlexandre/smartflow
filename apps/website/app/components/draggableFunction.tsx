import { useDraggable } from "@dnd-kit/core";
import type React from "react";
import { useState } from "react";
import { Input } from "./ui/input";

interface DraggableProps {
  id: string;
  content: string;
  styles?: React.CSSProperties;
}

export function DraggableFunction({ id, content, styles }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const [inputText, setInputText] = useState(content);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  return (
    <div
      id={id}
      ref={setNodeRef}
      style={{ ...style, ...styles }}
      className="flex h-12 w-80 place-items-center rounded-lg bg-white font-medium text-black text-sm"
      {...listeners}
      {...attributes}
    >
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        className="ml-4"
        onKeyDown={(e) => {
          // Empêche l'événement de drag lors de la saisie
          e.stopPropagation();
        }}
      />
      <div
        style={{ cursor: "grab" }}
        {...listeners}
        className="mr-4 flex w-full justify-end"
      >
        {/* Zone de drag, peut être une icône ou un simple texte */}
        <span>:::</span>
      </div>
    </div>
  );
}
