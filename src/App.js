import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/detailspage' element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
