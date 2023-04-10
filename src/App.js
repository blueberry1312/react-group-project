import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="space-lane" />
        <Routes>
          <Route path="/missions" element={<Missions />} />
          <Route path="/rockets" element={<Rockets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
