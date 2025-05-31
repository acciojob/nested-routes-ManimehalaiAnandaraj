import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';

const App = () => {
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
};

const Layout = () => {
  return (
    <div className="main-container">
      <nav>
        <h1>E-Commerce Store</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const Home = () => {
  return <h2>Welcome to our store!</h2>;
};

const Categories = () => {
  const categories = [
    { id: 'women', name: 'Women' },
    { id: 'men', name: 'Men' },
    { id: 'kids', name: 'Kids' },
    { id: 'electronics', name: 'Electronics' }
  ];

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
      
      <Outlet />
    </div>
  );
};

const CategoryItems = () => {
  const { categoryId } = useParams();
  
  // Sample data - in a real app, this would come from an API
  const itemsData = {
    women: [
      { id: 'dress1', name: 'Summer Dress' },
      { id: 'dress2', name: 'Evening Gown' }
    ],
    men: [
      { id: 'shirt1', name: 'Formal Shirt' },
      { id: 'pants1', name: 'Casual Pants' }
    ],
    kids: [
      { id: 'onesie1', name: 'Baby Onesie' },
      { id: 'shoes1', name: 'Kids Sneakers' }
    ],
    electronics: [
      { id: 'phone1', name: 'Smartphone' },
      { id: 'laptop1', name: 'Ultrabook' }
    ]
  };

  const items = itemsData[categoryId] || [];

  return (
    <div>
      <h3>{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Items</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/categories/${categoryId}/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      
      <Outlet />
    </div>
  );
};

const ItemDetail = () => {
  const { categoryId, itemId } = useParams();
  
  return (
    <div>
      <h4>Item Details</h4>
      <p>Category: {categoryId}</p>
      <p>Item ID: {itemId}</p>
      {/* In a real app, you would fetch detailed info about this specific item */}
    </div>
  );
};

export default App;