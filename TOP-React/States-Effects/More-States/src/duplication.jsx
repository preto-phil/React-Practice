import { useState } from "react";

const initialItems = [
  { title: 'Malawi', id: 0 },
  { title: 'Durban Poison', id: 1 },
  { title: 'Swazi Gold', id: 2 },
]

export default function Menu() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item => item.id === selectedId);

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value
        } 
      } else {
        return item;
      }
  }))
  }

  return (
    <>
      <h2>What&lsquo;s your travel snack?</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedId(item.id);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  )
}