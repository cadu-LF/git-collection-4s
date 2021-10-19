import React from 'react';

import {Form, Repos, Title} from './styles'
import logo from '../../assets/logo.svg'

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitCollection"/>
      {/* utiliza componente estilizado */}
      <Title>Dashboard</Title>
      <Form>
        <input placeholder="username/repository_name"/>
        <button type='submit'> Buscar </button>
      </Form>
      <Repos>
        <a href='/repositories'>
          <img src='https://avatars.githubusercontent.com/u/61796326?s=400&u=f73f4f7c22d4cf57ee6aff1828ea9e7ca6bac798&v=4' alt='usuário'/>
          <div>
            <strong> cadu-LF/gefi-node </strong>
            <p>
              Disciplina de Paradigmas de Programação II
            </p>
          </div>
        </a>
      </Repos>
    </>
  )
}
