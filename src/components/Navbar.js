// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fitness">Fitness</Link></li>
        <li><Link to="/diet">Diet</Link></li>
        <li><Link to="/nutrient">Nutrient</Link></li>
        <li><Link to="/transformations">Transformations</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
