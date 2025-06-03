import { Link, Outlet, useParams } from 'react-router-dom';
import React from 'react';

const Category = () => {
  const { categoryId } = useParams();
  
  // Sample data - in a real app this would come from an API
  const categoryItems = {
    women: [
      { id: 1, name: 'Dress', quantity: 10 },
      { id: 2, name: 'Blouse', quantity: 15 },
      { id: 3, name: 'Skirt', quantity: 8 },
      { id: 4, name: 'Jwellery', quantity: 8 }
    ]
   
  };

  const items = categoryItems[categoryId] || [];

  return (
    <div className="category">
      <h2>{categoryId.toUpperCase()} Category</h2>
      <ul className="items-list">
        {items.map(item => (
          <li key={item.id}>
            <Link to={`item/${item.id}`}>
              {item.name} (Quantity: {item.quantity})
            </Link>
          </li>
        ))}
      </ul>
      
      <Outlet />
    </div>
  );
};

export default Category;