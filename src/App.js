import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './Auth';
import Dashboard from './Dashboard';
import './MyStyle.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* If logged in, redirect to dashboard; otherwise, show Auth */}
          <Route 
            path="/" 
            element={currentUser ? <Navigate to="/dashboard" /> : <Auth setCurrentUser={setCurrentUser} />} 
          />
          {/* Dashboard route only accessible when logged in */}
          <Route 
            path="/dashboard/*" 
            element={currentUser ? <Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser} /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
