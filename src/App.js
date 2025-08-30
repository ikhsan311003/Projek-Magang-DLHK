import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LingkunganHidup from './components/LingkunganHidup';
import Kehutanan from './components/Kehutanan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lingkungan-hidup" element={<LingkunganHidup />} />
        <Route path="/kehutanan" element={<Kehutanan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
