import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductManagement from './ProductManagement';
import UserManagement from './UserManagement';
import StockLevels from './StockLevels';
import NavBar from './NavBar';

function Dashboard({ currentUser, setCurrentUser }) {
  const [productList, setProductList] = useState([]);

  const handleAddProduct = (product) => {
    setProductList([...productList, product]);
  };

  const handleEditProduct = (index, updatedProduct) => {
    const updatedProductList = productList.map((product, i) => 
      i === index ? updatedProduct : product
    );
    setProductList(updatedProductList);
  };

  const handleDeleteProduct = (index) => {
    const updatedProductList = productList.filter((_, i) => i !== index);
    setProductList(updatedProductList);
  };

  return (
    <div className="dashboard">
      <header>
        <h2>Welcome to Wings Cafe, {currentUser?.name}</h2>
        <button onClick={() => setCurrentUser(null)}>Sign Out</button>
      </header>
      <NavBar />
      <Routes>
        <Route
          path="product"
          element={
            <ProductManagement
              setCurrentUser={setCurrentUser}
              productList={productList}
              onAddProduct={handleAddProduct}
              onEditProduct={handleEditProduct}
              onDeleteProduct={handleDeleteProduct}
            />
          }
        />
        <Route path="user" element={<UserManagement setCurrentUser={setCurrentUser} />} />
        <Route path="stocklevels" element={<StockLevels productList={productList} />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
