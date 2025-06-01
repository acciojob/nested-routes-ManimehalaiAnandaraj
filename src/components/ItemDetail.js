// ItemDetail.js
import { useParams } from 'react-router-dom';
import React from 'react';

export default function ItemDetail() {
  const { categoryId, itemId } = useParams();
  
  return (
    <div>
      <h4>Item Details</h4>
      <p>Category: {categoryId}</p>
      <p>Item: {itemId}</p>
    </div>
  );
}