import React from 'react';
import Auth from './components/Auth/Auth';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <div id="Home" className="Home">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
