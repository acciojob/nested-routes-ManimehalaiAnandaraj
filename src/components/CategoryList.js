import { Link } from 'react-router-dom';
import React from 'react';

const CategoryList = () => {
  const categories = [
    { id: 'women', name: 'Women' },
    
  ];

  return (
    <div className="Women Items" data-cy="Women Items">
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