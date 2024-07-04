import { useDroppable } from "@dnd-kit/core";

import { DraggableIf } from "./If/DraggableIf";

export const DroppableZone = ({ items, setTransform }: any) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    backgroundColor: isOver ? "green" : "white",
  };

  return (
    <div className="h-[250rem] w-[120rem]" ref={setNodeRef} style={style}>
      {items.map(
        (item: any) =>
          item.id && (
            <DraggableIf
              key={item.id}
              id={item.id}
              myTransform={item.transform}
              setTransform={setTransform}
            />
          ),
      )}
    </div>
  );
};
