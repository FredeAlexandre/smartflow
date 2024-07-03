import './If.css';

export const BlockIf = ({ items, setItems }: any) => {

  const onClick = () => {
    const itemsLength = items.length
    setItems([ ...items, { id: itemsLength }])
  }

  return (
    <button className='bloc' onClick={onClick}>
      IF
    </button>
  )
}
