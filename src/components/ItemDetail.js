import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "./Data";

export default function ItemDetail() {
  const { categoryId, itemId } = useParams();
  const item = categories[categoryId]?.find(i => i.id === itemId);

  if (!item) return <p>Item not found</p>;

  return (
    <div>
      <h3>Item Detail</h3>
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>ID:</strong> {item.id}</p>
    </div>
  );
}
