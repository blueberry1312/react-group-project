import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/Missions';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="space-lane" />
        <Routes>
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
