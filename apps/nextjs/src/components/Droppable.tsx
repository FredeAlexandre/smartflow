import { FC } from "react";
import { useDroppable } from "@dnd-kit/core";

interface IDroppable {
  items: string[];
}

const Droppable: FC<IDroppable> = (props) => {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  });

  return (
    <ul ref={setNodeRef}>
      {props.items.map((item, idx) => (
        <div key={`${item}-${idx}`}>{item}</div>
      ))}
    </ul>
  );
};

export default Droppable;
