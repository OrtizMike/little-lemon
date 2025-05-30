import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/layout/Header';
import Main from './components/Main';
import Footer from './components/layout/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
