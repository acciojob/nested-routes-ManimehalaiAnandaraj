import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Category from "./Category";
import ItemDetail from "./ItemDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h2>Welcome! Choose a category.</h2>} />
          <Route path="category/:categoryId" element={<Category />}>
            <Route path=":itemId" element={<ItemDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
