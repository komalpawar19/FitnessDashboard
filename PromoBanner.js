import React from 'react';
import './PromoBanner.css';

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-content">
        <h3>50% off on Premium Membership</h3>
        <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor.</p>
        <button className="promo-button">Upgrade</button>
      </div>
      <div className="promo-illustration">🏃‍♂️</div>
    </div>
  );
};

export default PromoBanner;
