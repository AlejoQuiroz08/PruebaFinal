import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Si tienes un archivo de estilos CSS global
import App from './App'; // El componente principal de tu aplicación

// Renderiza el componente 'App' en el 'root' del HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

