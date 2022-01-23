import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Main from './pages/main';
import Plan from './pages/plan';
import Theory from './pages/theory';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/theory" element={<Theory />} />
      </Routes>
    </Router>
  );
}

export default App;
