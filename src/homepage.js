import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar';
import  Home from './pages/Home';
import  AboutUs from './pages/AboutUs';
import  ContactUs from './pages/ContactUs';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, Arial, sans-serif" }}>
      <Navbar />
      <div style={{ padding: "1rem 1.25rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<h2>404 • Page not found</h2>} />
        </Routes>
      </div>
    </div>
  );
}