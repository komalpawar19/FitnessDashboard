import React from 'react';
import './GoalProgress.css';

const GoalProgress = () => {
  const data = [
    { day: 'Mon', workout: 60, calories: 45, steps: 50 },
    { day: 'Tue', workout: 70, calories: 55, steps: 65 },
    { day: 'Wed', workout: 85, calories: 75, steps: 80 },
    { day: 'Thu', workout: 65, calories: 60, steps: 70 },
    { day: 'Fri', workout: 90, calories: 70, steps: 85 },
    { day: 'Sat', workout: 75, calories: 65, steps: 75 },
    { day: 'Sun', workout: 80, calories: 70, steps: 80 },
  ];

  return (
    <div className="goal-progress">
      <div className="chart-container">
        {data.map((item, index) => (
          <div key={index} className="bar-group">
            <div className="bar-wrapper">
              <div
                className="bar bar-workout"
                style={{ height: `${item.workout}%` }}
                title={`${item.day} Workout: ${item.workout}%`}
              ></div>
              <div
                className="bar bar-calories"
                style={{ height: `${item.calories}%` }}
                title={`${item.day} Calories: ${item.calories}%`}
              ></div>
              <div
                className="bar bar-steps"
                style={{ height: `${item.steps}%` }}
                title={`${item.day} Steps: ${item.steps}%`}
              ></div>
            </div>
            <span className="bar-label">{item.day}</span>
          </div>
        ))}
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-dot workout"></span>
          <span>Workout</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot calories"></span>
          <span>Calories</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot steps"></span>
          <span>Steps</span>
        </div>
      </div>
    </div>
  );
};

export default GoalProgress;
