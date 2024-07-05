import { DraggableFor } from "./For/DraggableFor";
import { DraggableIf } from "./If/DraggableIf";

export const DraggableBlocks = ({ setTransform }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        alignItems: "center",
      }}
    >
      <DraggableIf id={1} myTransform={null} setTransform={setTransform} />
      <DraggableFor id={2} myTransform={null} setTransform={setTransform} />
    </div>
  );
};
