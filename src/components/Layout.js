import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { categories } from './data';

const Layout = () => {
  return (
    <div>
      <nav>
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.name}>
              <Link to={`/category/${category.name.toLowerCase()}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
