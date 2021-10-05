// importa biblioteca react
import React from 'react';
// importa biblioteca react-dom
import ReactDOM from 'react-dom';
// importa o componente react App
import App from './App';

// classe react-dom manda reenderizar o componente App
// o retorno de App será exibido no elemento HTML com id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
