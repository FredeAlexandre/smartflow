import { useDraggable } from "@dnd-kit/core";
import type React from "react";

interface DraggableProps {
  id: string;
  content: React.ReactNode;
  styles?: React.CSSProperties;
}

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
      className="flex h-12 w-48 place-items-center justify-center rounded-lg border-2 border-white"
      {...listeners}
      {...attributes}
    >
      {content}
    </div>
  );
}
