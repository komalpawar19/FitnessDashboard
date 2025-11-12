import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Overview</h1>
        <p>Welcome Back!</p>
      </div>

      <div className="header-center">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            readOnly
          />
        </div>
      </div>

      <div className="header-right">
        <button className="icon-button">
          🔔
        </button>
        <button className="icon-button">
          ⚙️
        </button>
        <div className="profile-avatar">👤</div>
      </div>
    </header>
  );
};

export default Header;
