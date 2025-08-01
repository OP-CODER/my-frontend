// In App.jsx or a new component
import React, { useEffect, useState } from 'react';

function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/items')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Backend Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
