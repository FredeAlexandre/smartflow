"use client";

import {
  DndContext,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import React, { useState, useRef, useEffect } from "react";
import { Draggable } from "./draggable";
import { DraggableContract } from "./draggableContract";
import { DraggableFunction } from "./draggableFunction";
import { Droppable } from "./droppable";
import { Button } from "./ui/button";

interface Note {
  id: string;
  content: string;
  position: {
    x: number;
    y: number;
  };
}

const initialNotes = [
  {
    id: "1",
    content: "Contract",
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "2",
    content: "Function",
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "3",
    content: "Variable",
    position: {
      x: 0,
      y: 0,
    },
  },
];

export function NoCodeExample() {
  const [notes, setNotes] = useState<
    Array<{
      id: string;
      content: string;
      position: { x: number; y: number };
      clonable: boolean;
    }>
  >([]);

  const droppableRef = useRef<HTMLDivElement | null>(null); // Reference to the droppable container

  // Clone a note when drag starts
  function handleDragStart(ev: DragStartEvent) {
    const { active } = ev;
    const note = notes.find((n) => n.id === active.id);
  }

  // Update position of the dragged note
  function handleDragEnd(ev: DragEndEvent) {
    const { active, delta } = ev;
    const note = notes.find((n) => n.id === active.id);

    if (!note || !droppableRef.current) return;

    // Calculate the new position of the note after the drag
    const newPosition = {
      x: note.position.x + delta.x,
      y: note.position.y + delta.y,
    };

    // Get the bounding box of the droppable element
    const droppableRect = droppableRef.current.getBoundingClientRect();

    // Calculate the size of the draggable element (assuming a consistent size)
    const draggableElement = document.getElementById(note.id);
    console.log(note.id);
    const draggableRect = draggableElement?.getBoundingClientRect();

    // Check if the draggable is fully inside the droppable area
    if (
      draggableRect &&
      newPosition.x >= droppableRect.left &&
      newPosition.x + draggableRect.width <= droppableRect.right &&
      newPosition.y >= droppableRect.top &&
      newPosition.y + draggableRect.height <= droppableRect.bottom
    ) {
      // If fully inside, update the note's position
      const updatedNote = {
        ...note,
        position: newPosition,
      };

      // Update the notes state
      setNotes((prevNotes) =>
        prevNotes.map((n) => (n.id === updatedNote.id ? updatedNote : n)),
      );
    } else {
      console.log("Drag canceled: not fully inside droppable area.");
    }
  }

  // Function to add a new note at the center of the droppable container
  function handleButtonClick(note: Note) {
    if (droppableRef.current) {
      const droppableRect = droppableRef.current.getBoundingClientRect();

      // Calculate the center of the droppable area
      const centerX = droppableRect.left + 25;
      const centerY = droppableRect.top + 25;

      const newNote = {
        content: note.content,
        id: `${note.id}-${Date.now()}`,
        clonable: true,
        // Set the initial position of the new note to the center of the droppable container
        position: {
          x: centerX,
          y: centerY,
        },
      };

      setNotes((prevNotes) => [...prevNotes, newNote]);
    }
  }

  return (
    <div className="flex w-screen flex-row">
      <div className="flex w-1/6 flex-col justify-center gap-4">
        {initialNotes.map((note) => (
          <Button
            key={note.id}
            className="mx-4"
            onClick={() => handleButtonClick(note)}
          >
            {note.content}
          </Button>
        ))}
      </div>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div
          ref={droppableRef}
          className="mx-4 h-screen w-full justify-center border-2 border-white"
        >
          <Droppable>
            {notes.map((note) => {
              const DraggableComponent =
                note.content === "Contract"
                  ? DraggableContract
                  : note.content === "Function"
                    ? DraggableFunction
                    : // Assurez-vous que DraggableFunction est défini
                      Draggable;

              return (
                <DraggableComponent
                  styles={{
                    textAlign: "center",
                    left: `${note.position.x}px`,
                    top: `${note.position.y}px`,
                    position: "absolute", // Assurez-vous que la note a un positionnement absolu
                  }}
                  key={note.id}
                  id={note.id}
                  content={note.content}
                />
              );
            })}
          </Droppable>
        </div>
      </DndContext>
    </div>
  );
}
