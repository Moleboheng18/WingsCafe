import React, { useState } from 'react';
import Auth from './Auth';
import Dashboard from './Dashboard';
import './MyStyle.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      {currentUser ? (
        <Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser} />
      ) : (
        <Auth setCurrentUser={setCurrentUser} />
      )}
    </div>
  );
}

export default App;
