import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/layout/Header';
import Landing from './components/Landing';
import BookingPage from './components/booking/BookingPage';
import ConfirmedBooking from './components/booking/ConfirmedBooking';
import About from './components/pages/About';
import Menu from './components/pages/Menu';
import Login from './components/pages/Login';
import Footer from './components/layout/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* Main content can be added here if needed */}
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/reservations" element={<BookingPage />} />
          <Route exact path="/our-menu" element={<Menu />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route exact path="/ConfirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
