import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>AI Learning Generator</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/generate">Generate Content</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/flashcards">Flashcards</Link></li>
        <li><Link to="/summary">Summary</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
