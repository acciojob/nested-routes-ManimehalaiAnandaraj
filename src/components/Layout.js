import { Link, Outlet } from 'react-router-dom';
import React from 'react';

const Layout = () => {
  return (
    <div className="app" >
      <nav>
        <h1>E-Commerce Store</h1>
        <ul className="categories">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/women">Women</Link></li>
          
        </ul>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;