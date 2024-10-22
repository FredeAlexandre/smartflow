import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import type React from "react";
import { useRef, useState } from "react";
import { DraggableFunction } from "./draggableFunction";
import { Input } from "./ui/input";

interface DraggableProps {
  id: string;
  content: string;
  styles?: React.CSSProperties;
}

export function DraggableContract({ id, content, styles }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const contractNameRef = useRef<HTMLInputElement>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active?.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((item) => item.id === active?.id);
        const overIndex = prev.findIndex((item) => item.id === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  }

  const functions = [
    {
      id: "1",
      title: "Function1",
    },
    {
      id: "2",
      title: "Function2",
    },
    {
      id: "3",
      title: "Function3",
    },
    {
      id: "4",
      title: "Function4",
    },
  ];

  const [items, setItems] = useState(functions);

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
      className="flex h-fit w-96 flex-col rounded-lg border-2 border-black bg-white font-medium text-black text-sm"
      {...attributes}
    >
      <div className="mt-4 flex h-12 w-full flex-row items-center justify-start">
        <input
          type="text"
          ref={contractNameRef}
          value={inputText}
          onChange={handleInputChange}
          className="ml-4"
          onKeyDown={(e) => {
            e.stopPropagation();
            if (e.key === "Enter") {
              if (contractNameRef.current) {
                contractNameRef.current.blur();
              }
            }
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
      <div className="my-8 flex justify-center">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <ul>
              {items.map((item) => (
                <DraggableFunction
                  id={item.id}
                  key={item.id}
                  content={item.title}
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
