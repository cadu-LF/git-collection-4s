import React, { useState } from 'react';

import {Form, Repos, Title} from './styles'
import logo from '../../assets/logo.svg'

import { api } from '../../services/api';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  // criar uma interface para bolar a estrutura de dados vindo do github
  interface GitHubRepository {
    full_name: string;
    description: string;
    owner: {
      login: string;
      avatar_url: string;
    }
  }
  // criar uma variável e o método para alterá-la
  // useState cria um estado
  const [newRepository, setNewRepository] = useState('');
  // esse estádo é uma lista de GitHubRepository
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);

  // função para lidar com a mudança no input
  // event representa o elemento html que sofreu a mudança
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    // alterar o estado
    // event.target.value = valor do elemento alvo
    setNewRepository(event.target.value); // valor do elemento que sofreu o evento
  }

  // quando retorna uma Promisse a função deve ser async
  async function handleAddRepository(event: React.FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault();

    // chama a api passando o restante da url que contém o q o usuário informou no input
    const response = await api.get<GitHubRepository>(`/repos/${newRepository}`);
    const repository = response.data;

    // adicionar o novo repositório na lista de repositorios
    // spread operator, recupera todos os repositório que já estão na lista
    setRepositories([...repositories, repository]);
    setNewRepository('');
  }

  return (
    <>
      <img src={logo} alt="GitCollection"/>
      {/* utiliza componente estilizado */}
      <Title>Dashboard</Title>
      {/* quando submeter chama a função handleAddRepository */}
      <Form onSubmit={handleAddRepository}>
        {/* quando input sofrer alteração será chamado o método handleInputChange */}
        <input 
          onChange={handleInputChange} 
          placeholder="username/repository_name"
          value={newRepository}
        />
        <button type='submit'> Buscar </button>
      </Form>
      <Repos>
        {/* percorre a lista de repositories */}
        {repositories.map( (repository, index) => (
          <Link 
            to={`/repositories/${repository.full_name}`} 
            key={repository.full_name + index}>
              <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
          </Link>
        ))}
      </Repos>
    </>
  )
}
