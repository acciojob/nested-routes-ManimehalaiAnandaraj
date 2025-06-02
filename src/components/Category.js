import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { categories } from "./Data";

export default function Category() {
  const { categoryId } = useParams();
  const items = categories[categoryId] || [];

  return (
    <div>
      <h2>{categoryId.toUpperCase()} Category</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={item.id}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
