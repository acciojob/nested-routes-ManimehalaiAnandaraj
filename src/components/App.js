import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<CategoriesLayout />}>
            <Route index element={<CategoriesList />} />
            <Route path=":categoryId" element={<CategoryItems />}>
              <Route index element={<ItemsList />} />
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
      <header>
        <h1>E-Commerce Store</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const Home = () => {
  return <h2>Welcome to our store!</h2>;
};

const CategoriesLayout = () => {
  return (
    <div className="categories-container">
      <Outlet />
    </div>
  );
};

const CategoriesList = () => {
  const categories = [
    { id: 'women', name: 'Women' },
    { id: 'men', name: 'Men' },
    { id: 'kids', name: 'Kids' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'grooming', name: 'Grooming' }
  ];

  return (
    <div>
      <h2>Categories</h2>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CategoryItems = () => {
  const { categoryId } = useParams();
  
  return (
    <div className="category-items">
      <h2>{categoryId.charAt(0).toUpperCase() + categoryId.slice(1)} Items</h2>
      <Outlet />
    </div>
  );
};

const ItemsList = () => {
  const { categoryId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Sample data - in a real app, this would come from an API
  const itemsData = {
    women: [
      { id: 'dress1', name: 'Summer Dress' },
      { id: 'dress2', name: 'Evening Gown' },
      { id: 'shirt1', name: 'Blouse' },
      { id: 'trouser1', name: 'Wide Leg Pants' }
    ],
    men: [
      { id: 'shirt1', name: 'Formal Shirt' },
      { id: 'pants1', name: 'Casual Pants' },
      { id: 'jacket1', name: 'Leather Jacket' }
    ],
    kids: [
      { id: 'onesie1', name: 'Baby Onesie' },
      { id: 'shoes1', name: 'Kids Sneakers' }
    ],
    electronics: [
      { id: 'phone1', name: 'Smartphone' },
      { id: 'laptop1', name: 'Ultrabook' }
    ],
    grooming: [
      { id: 'shampoo1', name: 'Hair Shampoo' },
      { id: 'razor1', name: 'Electric Razor' },
      { id: 'cream1', name: 'Moisturizing Cream' }
    ]
  };

  const items = itemsData[categoryId] || [];
  
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (itemId) => {
    navigate(`/categories/${categoryId}/${itemId}`);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <ul className="item-list">
        {filteredItems.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ItemDetail = () => {
  const { categoryId, itemId } = useParams();
  
  // In a real app, you would fetch detailed info about this specific item
  const itemDetails = {
    name: `Detailed info for ${itemId}`,
    description: `This is a detailed description of the ${itemId} in ${categoryId} category.`,
    price: '$49.99'
  };

  return (
    <div className="item-detail">
      <h3>{itemDetails.name}</h3>
      <p>{itemDetails.description}</p>
      <p>Price: {itemDetails.price}</p>
    </div>
  );
};

export default App;