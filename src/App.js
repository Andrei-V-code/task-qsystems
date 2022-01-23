import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/main';
import Plan from './pages/plan';
import Theory from './pages/theory';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/main" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/theory" element={<Theory />} />
      </Routes>
    </Router>
  );
}

export default App;
