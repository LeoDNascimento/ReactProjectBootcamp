import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo_Explorer.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/44445499?s=400&u=bc34ba63a450653dae8a73965c9045c77b180a48&v=4"
            alt="Leo Nascimento"
          />
          <div>
            <strong>LeoDNascimento/Template_ReactProjects</strong>
            <p>
              A template for my react projects with editor config, ESlint and
              Prettier configured
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/44445499?s=400&u=bc34ba63a450653dae8a73965c9045c77b180a48&v=4"
            alt="Leo Nascimento"
          />
          <div>
            <strong>LeoDNascimento/Template_ReactProjects</strong>
            <p>
              A template for my react projects with editor config, ESlint and
              Prettier configured
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/44445499?s=400&u=bc34ba63a450653dae8a73965c9045c77b180a48&v=4"
            alt="Leo Nascimento"
          />
          <div>
            <strong>LeoDNascimento/Template_ReactProjects</strong>
            <p>
              A template for my react projects with editor config, ESlint and
              Prettier configured
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
