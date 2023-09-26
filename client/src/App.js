import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import Addition from './components/Addition';
import Minus from './components/Minus';
import Complex from './components/Complex';
import Complex2 from './components/Complex2';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addition">Addition</Link>
        </li>
        <li>
          <Link to="/minus">Minus</Link>
        </li>
        <li>
          <Link to="/complex">Complex</Link>
        </li>
        </ul> */}

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addition" element={<Addition />} />
          <Route path="/minus" element={<Minus />} />
          <Route path="/complex" element={<Complex />} />
          <Route path="/complex2" element={<Complex2 />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;