import { FC } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface IDraggable {
  children: string;
}

const Draggable: FC<IDraggable> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.children,
    data: { title: props.children },
  });

  return (
    <div
      ref={setNodeRef}
      className="my-4 flex h-16 place-items-center justify-center rounded-md border-2 border-white"
      style={{ transform: CSS.Translate.toString(transform) }}
      {...attributes}
      {...listeners}
    >
      {props.children}
    </div>
  );
};

export default Draggable;
