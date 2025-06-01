import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { categories } from './data';

const Category = () => {
  const { categoryName } = useParams();
  const category = categories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());

  if (!category) return <h3>Category not found</h3>;

  return (
    <div>
      <h3>{category.name} Items</h3>
      <ul>
        {category.items.map(item => (
          <li key={item.id}>
            <Link to={`/category/${category.name.toLowerCase()}/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet context={category} />
    </div>
  );
};

export default Category;