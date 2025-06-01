// Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}