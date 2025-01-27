import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import Letter from './components/FourthPage';
import Music from './components/FifthPage';
import CandlePage from './components/BirthdayCandle';
import Photos from './components/Photos';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<Letter />} />
        <Route path="/fifth" element={<Music />} />
        <Route path="/sixth" element={<CandlePage />} />
        <Route path="/seventh" element={<Photos />} />

      </Routes>
    </Router>
  );
};

export default App;
