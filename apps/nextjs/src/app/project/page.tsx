"use client";

import React, { useState } from "react";
import { DndContext, DragEndEvent, DragStartEvent } from "@dnd-kit/core";

import { Draggable } from "../../components/Draggable";
import { Droppable } from "../../components/Droppable";

const initialNotes = [
  {
    id: "1",
    content: "If",
    position: {
      x: 20,
      y: 20,
    },
    clonable: true,
  },
  {
    id: "2",
    content: "Else",
    position: {
      x: 20,
      y: 80,
    },
    clonable: true,
  },
  {
    id: "3",
    content: "While",
    position: {
      x: 20,
      y: 140,
    },
    clonable: true,
  },
];

export default function App() {
  const [notes, setNotes] = useState(initialNotes);

  // Clone a note when drag starts
  function handleDragStart(ev: DragStartEvent) {
    const { active } = ev;
    const note = notes.find((n) => n.id === active.id);
    if (note && note.clonable == true) {
      // Create a new note with the same properties
      note.clonable = false;
      const newNote = {
        ...note,
        id: `${note.id}-${Date.now()}`, // Generate a unique ID for the cloned note
        clonable: true,
      };
      setNotes((prevNotes) => [...prevNotes, newNote]); // Add the cloned note to the notes array
    }
  }

  // Update position of the dragged note
  function handleDragEnd(ev: DragEndEvent) {
    const { active, delta } = ev;
    const note = notes.find((n) => n.id === active.id);

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
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Droppable>
        {notes.map((note) => (
          <Draggable
            styles={{
              textAlign: "center",
              left: `${note.position.x}px`,
              top: `${note.position.y}px`,
            }}
            key={note.id}
            id={note.id}
            content={note.content}
          />
        ))}
      </Droppable>
    </DndContext>
  );
}
