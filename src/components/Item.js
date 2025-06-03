import { useParams } from 'react-router-dom';
import React from 'react';

const Item = () => {
  const { categoryId, itemId } = useParams();
  
  // In a real app, this would come from an API
  const itemDetails = {
    women: {
      1: { name: 'Dress', quantity: 10, size: 'M', status: 'In Stock' },
      2: { name: 'Blouse', quantity: 15, size: 'S', status: 'In Stock' },
      3: { name: 'Skirt', quantity: 8, size: 'L', status: 'Low Stock' },
      4: { name: 'Jwellery', quantity: 8, size: 'free', status: 'Low Stock' }
    }
  };

  const item = itemDetails[categoryId]?.[itemId] || {};

  return (
    <div className="item-details" data-cy="item-details">
      <h3>Item Details</h3>
      <p>Name: {item.name}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Size: {item.size}</p>
      <p>Status: {item.status}</p>
    </div>
  );
};

export default Item;