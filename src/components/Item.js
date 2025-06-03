import { useParams } from 'react-router-dom';
import React from 'react';

const Item = () => {
  const { categoryId, itemId } = useParams();
  
  // In a real app, this would come from an API
  const itemDetails = {
    women: {
      1: { name: 'Dress', quantity: 10, size: 'M', status: 'In Stock' },
      2: { name: 'Blouse', quantity: 15, size: 'S', status: 'In Stock' },
      3: { name: 'Skirt', quantity: 8, size: 'L', status: 'Low Stock' }
    },
    men: {
      1: { name: 'Shirt', quantity: 20, size: 'XL', status: 'In Stock' },
      2: { name: 'Pants', quantity: 12, size: '32', status: 'In Stock' },
      3: { name: 'Jacket', quantity: 5, size: 'M', status: 'Low Stock' }
    },
    kids: {
      1: { name: 'T-shirt', quantity: 30, size: 'XS', status: 'In Stock' },
      2: { name: 'Shorts', quantity: 25, size: 'S', status: 'In Stock' },
      3: { name: 'Sweater', quantity: 10, size: 'M', status: 'In Stock' }
    }
  };

  const item = itemDetails[categoryId]?.[itemId] || {};

  return (
    <div className="item-details">
      <h3>Item Details</h3>
      <p>Name: {item.name}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Size: {item.size}</p>
      <p>Status: {item.status}</p>
    </div>
  );
};

export default Item;