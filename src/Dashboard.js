import React, { useState } from 'react';
import ProductManagement from './ProductManagement';
import UserManagement from './UserManagement';
import NavBar from './NavBar';

function Dashboard({ currentUser, setCurrentUser }) {
  const [activeTab, setActiveTab] = useState('product');

  return (
    <div className="dashboard">
      <header>

      </header>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'product' ? (
        <ProductManagement setCurrentUser={setCurrentUser} />
      ) : (
        <UserManagement setCurrentUser={setCurrentUser} />
      )}
    </div>
  );
}

export default Dashboard;
