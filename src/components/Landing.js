import React from 'react';
import Hero from './components/Hero';
import Dishes from './components/dishes/Dishes';
import Testimonials from './components/testimonials/Testimonials';
import About from './pages/About';

const Landing = () => {
  return (
    <>
      <Hero />
      <Dishes />
      <Testimonials />
      <About mainPage={ true } />
    </>
  )
}
export default Landing;
