import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Category from './Category';
import ItemDetail from './ItemDetail';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h2>Welcome! Please select a category.</h2>} />
        
          <Route path="category/:categoryName" element={<Category />}>
            <Route path=":itemId" element={<ItemDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
