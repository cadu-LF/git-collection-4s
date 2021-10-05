import React from 'react';

interface IParams {
  nome: string;
  email: string;
}

export const Repository: React.FC<IParams> = ({nome, email}) => {
  return (
    <>
      <h2>Repositório</h2>
      <h4>{nome}</h4>
      <h4>{email}</h4>
    </>
  )
}
