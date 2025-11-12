import React from 'react';
import './Goals.css';

const Goals = ({ items }) => {
  return (
    <div className="goals-list">
      {items.map((item, index) => (
        <div key={index} className="goal-item">
          <div className="goal-icon">{item.badge}</div>
          <div className="goal-info">
            <p className="goal-title">{item.title}</p>
            <p className="goal-date">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Goals;
