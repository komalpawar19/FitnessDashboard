import React from 'react';
import './Schedule.css';

const Schedule = ({ items }) => {
  return (
    <div className="schedule">
      {items.map((item, index) => (
        <div key={index} className="schedule-item">
          <div className="schedule-day">{item.day}</div>
          <div className="schedule-details">
            <div className="activity-info">
              <span className="activity-emoji">{item.icon}</span>
              <div className="activity-text">
                <p className="activity-name">{item.activity}</p>
                <p className="activity-time">At {item.time}</p>
              </div>
            </div>
            <span className="activity-count">{item.count || item.duration}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
