import React from 'react'
import './About.css';
import MarioAdrianA from '../../images/Mario-and-Adrian-A.jpg';
import MarioAdrianB from '../../images/Mario-and-Adrian-B.jpg';

const About = ( {mainPage = false} ) => {
  return (
    <>
      {!mainPage && (
        <div className="page-header">
            <h1 className='title'>About Us</h1>
        </div>
      )}
      <section className="about container">
        <div className='hero-grid'>
            <div className="about-content">
              <h2 className='title'>Little Lemon</h2>
              <p className='subtitle'>Chicago</p>
              <p className='description'>
              At Little Lemon, we’re more than just a restaurant —
              we’re a family. Nestled in the heart of the community,
              our cozy eatery brings people together over fresh,
              homemade meals made with love and a splash of citrusy charm.
              Inspired by family traditions and bold flavors, our menu features
              comforting classics with a zesty twist. Whether you’re here for a
              quick lunch or a leisurely dinner, we’re proud to serve dishes that
              feel like home. Come as you are, and leave a little happier —
              that’s the Little Lemon way.
              </p>
            </div>
            <div className="about-images">
              <img
                src={ MarioAdrianA }
                alt="Restaurant Banner"
              />
              <img
                src={ MarioAdrianB }
                alt="Restaurant Banner"
              />
            </div>
          </div>
      </section>
    </>
  )
}
export default About;