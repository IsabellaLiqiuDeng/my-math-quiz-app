import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home() {

  return (
    <div className="home-container">
      <h1>Welcome to the Math Quiz App!</h1>
      <p>Choose a quiz category:</p>
      <ul className="quiz-options">
        {/* <li>
          <Link to="/addition" className="quiz-link">Addition</Link>
        </li>
        <li>
          <Link to="/minus" className="quiz-link">Minus</Link>
        </li> */}
        <li>
          <Link to="/complex" className="quiz-link">Addition & Subtraction</Link>
        </li>
        <li>
          <Link to="/complex2" className="quiz-link">Multiplication & Division</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
