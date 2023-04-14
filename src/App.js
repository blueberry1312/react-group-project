import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="space-lane" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/rockets" element={<Rockets />} />
            <Route path="/my-profile" element={<MyProfile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
