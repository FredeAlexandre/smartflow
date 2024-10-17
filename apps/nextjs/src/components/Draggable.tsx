import React from "react";
import { useDraggable } from "@dnd-kit/core";

interface DraggableProps {
  id: string;
  content: React.ReactNode;
  styles?: React.CSSProperties;
}

const CustomStyle =
  "flex absolute justify-center w-48 h-12 border-2 border-white place-items-center rounded-lg"; // Tailwind classes

export function Draggable({ id, content, styles }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, ...styles }}
      className={CustomStyle}
      {...listeners}
      {...attributes}
    >
      {content}
    </div>
  );
}
