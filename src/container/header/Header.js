import React from 'react';
import './Header.css'; // Create a new CSS file for header styles

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
        <button className="sign-in-button">Sign In</button>
        <button className="sign-up-button">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
