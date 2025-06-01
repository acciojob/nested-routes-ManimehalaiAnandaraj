// Categories.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const categories = [
  { id: 'women', name: 'Women' },
  { id: 'men', name: 'Men' },
  { id: 'kids', name: 'Kids' }
];

export default function Categories() {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={category.id}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}