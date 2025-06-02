import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/category/women">Women</Link> | 
        <Link to="/category/men">Men</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
