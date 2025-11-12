import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { id: 1, label: 'Overview', icon: '⊞', active: true },
    { id: 2, label: 'Workout', icon: '⏱' },
    { id: 3, label: 'Diet Plan', icon: '🍽' },
    { id: 4, label: 'Goals', icon: '🎯' },
    { id: 5, label: 'My Schedule', icon: '📅' },
    { id: 6, label: 'Progress', icon: '📊' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">💪</div>
        <div className="brand-text">
          <h2>Fitness</h2>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`nav-item ${item.active ? 'active' : ''}`}
            onClick={(e) => e.preventDefault()}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <a href="#" className="footer-item" onClick={(e) => e.preventDefault()}>
          <span>❓</span>
          <span>Help</span>
        </a>
        <a href="#" className="footer-item" onClick={(e) => e.preventDefault()}>
          <span>🚪</span>
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
