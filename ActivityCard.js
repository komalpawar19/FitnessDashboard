import React from 'react';
import './ActivityCard.css';

const ActivityCard = ({ title, value, unit, icon, color }) => {
  return (
    <div className={`activity-card ${color}`}>
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <p className="card-label">{title}</p>
        <p className="card-value">
          {value} <span className="card-unit">{unit}</span>
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
