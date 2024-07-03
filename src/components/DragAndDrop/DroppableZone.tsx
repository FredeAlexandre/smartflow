import { useDroppable } from '@dnd-kit/core';
import { DraggableIf } from './Blocks/If/DraggableIf';

export const DroppableZone = ({ items, setTransform }: any) => {

  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    backgroundColor: isOver ? 'green' : 'white',
  };

  return (
    <div className='w-350 h-1000' ref={setNodeRef} style={style}>
      {items.map((item: any) => item.id && <DraggableIf key={item.id} id={item.id} myTransform={item.transform} setTransform={setTransform} />)}
    </div>
  );
}
