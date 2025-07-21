import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Products from './Component/Products';
import Services from './Component/Services';
import Experience from './Component/Experience';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import "@fontsource/roboto"; 

  function App() {
  return (
    <div className="main-container">
      <Header />
      <main className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer className="footer"/>
    </div>
  );
}
export default App;

