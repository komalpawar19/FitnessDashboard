import React from 'react';
import './MainContent.css';
import ActivityCard from './ActivityCard';
import GoalProgress from './GoalProgress';
import Schedule from './Schedule';
import Goals from './Goals';
import FoodTable from './FoodTable';
import PromoBanner from './PromoBanner';

const MainContent = () => {
  const activityStats = [
    { title: 'Workout', value: '00', unit: 'hrs', icon: '⏱', color: 'blue' },
    { title: 'Calories', value: '1800', unit: 'kcal', icon: '🔥', color: 'orange' },
    { title: 'Steps', value: '2000', unit: 'steps', icon: '👣', color: 'purple' },
  ];

  const foodItems = [
    { food: 'Burrito', emoji: '🌯', meal: 'Pizza Burger', calories: 'Receiving', time: '01:00 AM', carbs: '20 gm' },
    { food: 'Burger', emoji: '🍔', meal: 'Pizza Burger', calories: 'Receiving', time: '01:00 AM', carbs: '20 gm' },
  ];

  const scheduleItems = [
    { day: 'Monday', activity: 'Stretch', time: '08:00', count: '20 Sets', icon: '🧘' },
    { day: 'Tuesday', activity: 'Back Stretch', time: '08:00', count: '10 Rounds', icon: '🏃' },
    { day: 'Wednesday', activity: 'Yoga', time: '08:00', duration: '20 min', icon: '🧘' },
  ];

  const goals = [
    { title: 'ABS & Stretch', date: 'Saturday, April 14 08:00 AM', badge: '🏅' },
    { title: 'Push Up', date: 'Sunday, April 15 08:00 AM', badge: '💪' },
  ];

  return (
    <main className="main-content">
      <div className="content-wrapper">
        {/* Hero Banner */}
        <section className="hero-banner">
          <div className="banner-content">
            <h2>Track Your Daily Activities</h2>
            <p>Keep track of all activities done during the day. Have a summary every day with detailed statistics</p>
          </div>
          <div className="banner-image">🏃</div>
        </section>

        {/* Stats Cards */}
        <section className="stats-section">
          {activityStats.map((stat, index) => (
            <ActivityCard key={index} {...stat} />
          ))}
        </section>

        {/* Main Grid */}
        <div className="content-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Goal Progress */}
            <section className="card">
              <div className="card-header">
                <h3>Goal Progress</h3>
                <select className="time-select">
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <GoalProgress />
            </section>

            {/* Food Table */}
            <section className="card">
              <div className="card-header">
                <h3>Food</h3>
              </div>
              <FoodTable items={foodItems} />
            </section>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Schedule */}
            <section className="card">
              <div className="card-header">
                <h3>My Schedule</h3>
                <a href="#" className="view-all">
                  View All →
                </a>
              </div>
              <Schedule items={scheduleItems} />
            </section>

            {/* Goals */}
            <section className="card">
              <div className="card-header">
                <h3>Goals</h3>
                <a href="#" className="view-all">
                  View All →
                </a>
              </div>
              <Goals items={goals} />
            </section>

            {/* Promo Banner */}
            <PromoBanner />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
