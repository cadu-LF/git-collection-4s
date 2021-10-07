import React from 'react';

interface IParams {
  nome: string;
  email: string;
}

// props são as propriedades dos componetes
export const Repository: React.FC<IParams> = (props) => {
  return (
    <>
      <h2>Repositório</h2>
      <ul>
        <li>
          <h3>Nome: {props.nome}</h3>
        </li>
        <li>
          <h3>Email: {props.email}</h3>
        </li>
      </ul>
    </>
  )
}
