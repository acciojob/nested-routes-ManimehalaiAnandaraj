import { Link } from 'react-router-dom';
import React from 'react';

const CategoryList = () => {
  const categories = [
    { id: 'women', name: 'Women' },
    { id: 'men', name: 'Men' },
    { id: 'kids', name: 'Kids' }
  ];

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={`/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;