import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

// criação de um componente utilizado function component
const App:React.FC = () => {
  return (
    <>
      {/* Definição do SPA */}
      <BrowserRouter>
        <Routes /> {/* vai mostrar o resultado de acordo com a rota acessada */}
      </BrowserRouter>
    </>
  );
}

export default App;
