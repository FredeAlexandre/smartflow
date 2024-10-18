"use client";

import {
  DndContext,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import React, { useState } from "react";
import { Button } from "./ui/button";

import { Draggable } from "./draggable";
import { Droppable } from "./droppable";

const initialNotes = [
  {
    id: "1",
    content: "New Contract",
    clonable: true,
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "2",
    content: "New Function",
    clonable: true,
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

  // Clone a note when drag starts
  function handleDragStart(ev: DragStartEvent) {
    const { active } = ev;
    const note = notes.find((n) => n.id === active.id);
  }

  // Update position of the dragged note
  function handleDragEnd(ev: DragEndEvent) {
    const { active, delta } = ev;
    const note = notes.find((n) => n.id === active.id);

    console.log(note);
    console.log(delta.x);
    console.log(delta.y);

    if (!note) return;

    // Update the note's position based on the drag delta
    const updatedNote = {
      ...note,
      position: {
        x: note.position.x + delta.x,
        y: note.position.y + delta.y,
      },
    };

    // Update the notes state
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.id === updatedNote.id ? updatedNote : n)),
    );
  }

  return (
    <div className="flex w-screen flex-row">
      <div className="flex grid w-1/6 grid-cols-1 justify-center gap-4">
        {initialNotes.map((note) => (
          <Button
            key={note.id}
            className="mx-4"
            onClick={() => {
              const newNote = {
                content: note.content,
                id: `${note.id}-${Date.now()}`,
                clonable: true,
                position: note.position,
              };
              setNotes((prevNotes) => [...prevNotes, newNote]);
            }}
          >
            {note.content}
          </Button>
        ))}
      </div>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flew mx-4 w-full justify-center border-2 border-white">
          <Droppable>
            {notes.map((note) => (
              <Draggable
                styles={{
                  textAlign: "center",
                }}
                key={note.id}
                id={note.id}
                content={note.content}
              />
            ))}
          </Droppable>
        </div>
      </DndContext>
    </div>
  );
}
