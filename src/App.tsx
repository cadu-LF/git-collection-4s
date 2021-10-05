import React from 'react'
import { Dashboard } from './pages/Dashboard';
import { Repository } from './pages/Repository';

// criação de um componente utilizado function component
const App:React.FC = () => {
  return (
    <>
      <h1>Hello World</h1>
      <h2>Hello World 2</h2>
      <h3>Hello World 3</h3>
      <Dashboard />
      <Repository nome='Cadu' email='cadu@email.com' />
    </>
  );
}

export default App;
