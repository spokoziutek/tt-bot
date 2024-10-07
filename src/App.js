import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import SideBar from './SideBar/SideBar';
import ServerStatus from './ServerStatus/ServerStatus';
import FishCalculator from './FishCalulator/FishCalculator';

function Home() {
  return (
    <div className='flex min-h-screen bg-gray-300 dark:bg-gray-700 items-center justify-center'>
      <SideBar />
      <ServerStatus />
    </div>
  ); 
}

function FishPage () {
  return (
    <div className='flex min-h-screen bg-gray-300 dark:bg-gray-700 items-center justify-center'>
      <SideBar />
      <FishCalculator />
    </div>
  )
}

function StoragesPage () {
  return (
    <div className='flex min-h-screen bg-gray-300 dark:bg-gray-700 items-center justify-center'>
      <SideBar />

    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FishPage" element={<FishPage />} />
      </Routes>
    </Router>
  );
}

export default App;
