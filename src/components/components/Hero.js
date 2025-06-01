import React from 'react';
import Chef from '../../images/restaurant_chef_B.jpg';
import './Hero.css';

const Banner = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className='content hero-grid'>
          <div className="hero-content">
            <h1 className='title'>Little Lemon</h1>
            <p className='subtitle'>Chicago</p>
            <p className='description'>
              A cozy, family-owned restaurant serving fresh,
              Mediterranean-inspired dishes with a twist of
              homemade charm. At Little Lemon, every meal is
              made with love.
            </p>
            <button className='btn btn-primary'>Reserve a Table</button>
          </div>
          <div className="hero-image">
            <img
              src={ Chef }
              alt="Restaurant Banner"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Banner;