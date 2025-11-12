import React from 'react';
import './FoodTable.css';

const FoodTable = ({ items }) => {
  return (
    <div className="food-table">
      <div className="table-header">
        <div className="col-food">Food</div>
        <div className="col-meal">Meal</div>
        <div className="col-calories">Calories</div>
        <div className="col-time">Time</div>
        <div className="col-carbs">Carbs</div>
      </div>
      <div className="table-body">
        {items.map((item, index) => (
          <div key={index} className="table-row">
            <div className="col-food">
              <span className="food-emoji">{item.emoji}</span>
              <span className="food-name">{item.food}</span>
            </div>
            <div className="col-meal">{item.meal}</div>
            <div className="col-calories">{item.calories}</div>
            <div className="col-time">{item.time}</div>
            <div className="col-carbs">{item.carbs}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodTable;
