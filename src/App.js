import React from 'react';
import './App.css';

import Timer from './components/Timer';
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Timer></Timer>
    </div>
  );
}

export default App;
