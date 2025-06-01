import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1>Fashion Store</h1>
      <nav>
        <Link to="category/Women">Women</Link> |{" "}
        <Link to="category/Men">Men</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
