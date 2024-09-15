import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shell_scripting from './pages/Shell_scripting';
import Linux from './pages/Linux';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar /> 
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Linux" element={<Linux />} />
            <Route path="/Shell_scripting" element={<Shell_scripting />} />
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  );
};

export default App;
