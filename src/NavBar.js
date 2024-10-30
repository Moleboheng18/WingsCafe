import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="product" className="nav-link">Product Management</Link>
        </li>
        <li>
          <Link to="user" className="nav-link">User Management</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
