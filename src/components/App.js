// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Categories from './Categories';
import CategoryItems from './CategoryItems';
import ItemDetail from './ItemDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />}>
            <Route path=":categoryId" element={<CategoryItems />}>
              <Route path=":itemId" element={<ItemDetail />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;