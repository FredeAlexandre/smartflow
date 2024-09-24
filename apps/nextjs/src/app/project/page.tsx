"use client";

import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

import Draggable from "../../components/Draggable";
import Droppable from "../../components/Droppable";

const App = () => {
  const Conditions = ["If", "Else", "While", "For", "Start", "End"];
  const [dropItems, setDropItems] = useState<string[]>([]);

  const addItemsToCart = (e: DragEndEvent) => {
    const newItem = e.active.data.current?.title;
    if (e.over?.id !== "droppable" || !newItem) return;
    const temp = [...dropItems];
    temp.push(newItem);
    setDropItems(temp);
  };

  return (
    <DndContext onDragEnd={addItemsToCart}>
      <main className="flex pt-10">
        <div className="mr-8 w-1/6">
          <ul>
            {Conditions.map((item) => (
              <Draggable key={item}>{item}</Draggable>
            ))}
          </ul>
        </div>
        <div className="w-full">
          <Droppable items={dropItems} />
        </div>
      </main>
    </DndContext>
  );
};

export default App;
