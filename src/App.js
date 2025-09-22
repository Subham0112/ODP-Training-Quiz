import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentPage from './components/Content';
import HodPage from './components/HodPage';
import TrainingPage from './components/Training';
import QuizPage from './components/Quiz';
import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="custom-nav">
        <Navbar  />
        </div>
        <Sidebar />
        <div className="main-content" >
          <Routes>
            <Route path="/" element={<Navigate to="/odp" replace />} />
            <Route path="/odp" element={<ContentPage />} />
             <Route path="/hod" element={<HodPage />} />
            <Route path="/training/:type/:option" element={<TrainingPage />} />
            <Route path="/quiz/:type/:option" element={<QuizPage />} />
            <Route path="*" element={<Navigate to="/odp" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;