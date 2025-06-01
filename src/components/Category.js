import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { categories } from '../data';

const Category = () => {
  const { categoryName } = useParams();
  const items = categories[categoryName] || [];

  return (
    <div>
      <h2>{categoryName} Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Category;
