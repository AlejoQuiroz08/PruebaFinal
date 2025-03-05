import React from 'react';
import './App.css';
import Auth from './components/Auth';
import Cliente from './components/Cliente';
import Tecnico from './components/Tecnico';
import Ticket from './components/Ticket';

function App() {
  return (
    <div className="App">
      <h1>Sistema Web</h1>
      <Auth />
      <Cliente />
      <Tecnico />
      <Ticket />
    </div>
  );
}

export default App;
