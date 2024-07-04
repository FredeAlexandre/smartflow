"use client";

import { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";

import { DraggableIf } from "~/components/Blocks/If/DraggableIf";
import { DraggableBlocks } from "../../components/Blocks/DraggableBlocks";
import { DroppableZone } from "../../components/Blocks/DroppableZone";

export default () => {
  const [draggableItems, setDraggableItems] = useState([{}]);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  console.log(transform);

  const handleDragEnd = (event: any) => {
    if (event.over && event.over.id === "droppable") {
      if (event.active.id > 2) return;
      const itemsLength = draggableItems.length;
      console.log(transform);
      setDraggableItems([
        ...draggableItems,
        { id: itemsLength + 3, transform: transform },
      ]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <DraggableBlocks setTransform={setTransform}>
          <DroppableZone items={draggableItems} setTransform={setTransform} />
        </DraggableBlocks>
      </div>
    </DndContext>
  );
};
