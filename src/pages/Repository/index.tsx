import React, { useEffect, useState } from 'react';

import { FiChevronLeft } from 'react-icons/fi';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { Header, RepoInfo } from './styles';

import logo from '../../assets/logo.svg';

import {api} from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface GitHubRepository {
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

// props são as propriedades dos componetes
export const Repository: React.FC = (props) => {

  // recupera os parâmetros de Rota
  const {params} = useRouteMatch<RepositoryParams>();

  // estado para guardar os dados da api
  const [repository, setRepository] = useState<GitHubRepository | null>(null);

  // execulta a função sempre que o parâmetro for alterado
  useEffect( () => {
    api
      // consome a api no enpoint passado
      .get<GitHubRepository>(`repos/${params.repository}`)
      // depois, recebe a resposta e atribui ao estado setRepository
      .then( response => setRepository(response.data))

  }, [params.repository])

  return (
    <>
      <Header>
        <img src={logo} alt='GitCollection'/>
        <Link to='/'>
          <FiChevronLeft/>
          Volar
        </Link>
      </Header>
      {repository && (
      <RepoInfo>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
          <div>
            <strong>{repository.full_name}</strong>
            <p> {repository.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repository.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repository.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repository.open_issues_count}</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepoInfo>
      )}
    </>
  )
}
