// CategoryItems.js
import { Link, Outlet, useParams } from 'react-router-dom';
import React from 'react';

const itemsData = {
  women: [
    { id: 'dress', name: 'Dress' },
    { id: 'top', name: 'Top' }
  ],
  men: [
    { id: 'shirt', name: 'Shirt' },
    { id: 'pants', name: 'Pants' }
  ],
  kids: [
    { id: 'onesie', name: 'Onesie' },
    { id: 'booties', name: 'Booties' }
  ]
};

export default function CategoryItems() {
  const { categoryId } = useParams();
  const items = itemsData[categoryId] || [];

  return (
    <div>
      <h3>{categoryId} Items</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={item.id}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}