import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
