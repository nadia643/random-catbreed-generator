import React from 'react';
import './App.css';
import BreedGenerator from './components/BreedGenerator';
import FactGenerator from './components/FactGenerator'


function App() {
  return (
    <div className="App">
      <BreedGenerator />
      <FactGenerator />
    </div>
  );
}

export default App;
