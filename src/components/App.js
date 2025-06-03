import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './Layout';
import CategoryList from './CategoryList';
import Category from './Category';
import Item from './Item';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CategoryList />} />
          <Route path=":categoryId" element={<Category />}>
            <Route path="item/:itemId" element={<Item />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;