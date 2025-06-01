import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

const ItemDetail = () => {
  const { itemId } = useParams();
  const category = useOutletContext();

  // Check if category is defined and find the item
  if (!category) {
    return <h4>No category found</h4>;
  }

  const item = category.items.find(i => i.id === itemId);

  if (!item) return <h4>Item not found</h4>;

  return (
    <div>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;