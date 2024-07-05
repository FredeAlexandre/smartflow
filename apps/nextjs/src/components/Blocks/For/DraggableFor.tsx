import { useEffect, useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS, Transform } from "@dnd-kit/utilities";

export const DraggableFor = ({ id, myTransform, setTransform }: any) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const [lastTransform, setLastTransform] = useState<Transform | null>(
    myTransform,
  );

  useEffect(() => {
    if (transform !== null && transform !== undefined) {
      setLastTransform(transform);
      setTransform(transform);
    }
  }, [transform]);

  const style = {
    transform:
      id > 2
        ? CSS.Translate.toString(lastTransform)
        : CSS.Translate.toString(transform),
  };

  return (
    <button
      className="bloc"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      FOR
    </button>
  );
};
