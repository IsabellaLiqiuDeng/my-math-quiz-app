// NavigationBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Import the CSS file

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation-item">
          <Link to="/complex">+&-</Link>
        </li>

        <li className="navigation-item">
          <Link to="/complex2">x&÷</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
