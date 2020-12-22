/* eslint-disable camelcase */
import React from 'react';

import api from '../../services/api2';

import logoImg from '../../assets/logo_Explorer.svg';

import { Title } from './styles';

const Dashboard: React.FC = () => {
  async function handleAddRepository(): Promise<void> {
    const response = await api.post('/user/login', {
      username: 'rafael',
      password: 'testing123',
    });
    console.log(response);
  }
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <button type="button" onClick={handleAddRepository}>
        Pesquisar
      </button>
    </>
  );
};

export default Dashboard;
