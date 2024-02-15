import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Loginpage from './components/Loginpage';
import React from 'react';
import Footerp from './components/Footerp';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
      {/* <Footerp /> */}
    </div>
  );
}

export default App;
