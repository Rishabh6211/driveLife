import React from 'react';
import './Header.css'; // Create a new CSS file for header styles
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      {/* Left Section */}
      <div className="logo-section">
        {/* Add your logo image here */}
        <img src="https://clipart-library.com/images/rcLonXkKi.png" alt="Logo" className="logo" />
        <span className="app-name">FindGuide</span>
      </div>

      {/* Middle Section */}
      <div className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="auth-section">
      <Link to="/signin">
        <button className="sign-in-button">
          Sign In
          </button>
      </Link>
        <Link to="/signup">
          <button className="sign-up-button">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
