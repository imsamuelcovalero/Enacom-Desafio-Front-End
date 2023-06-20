import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experiences = [
    {
      company: 'Trybe',
      location: 'Remoto',
      role: 'Summer Jobber',
      duration: 'JANEIRO DE 2023 – MARÇO DE 2023',
      description: `Responsável por revisar e aprimorar conteúdos, exercícios, aulas,
      gabaritos e projetos do módulo de back-end do curso de Desenvolvimento
      Web da Trybe, com base em feedbacks estruturados. Os conteúdos
      incluem Docker, NodeJs, MySQL, Express.Js, JWT, Arquitetura de
      Software, Sequelize, Typescript, MongoDB, Mongoose, Deploy, POO,
      SOLID e testes com Mocha, Chai e Sinon. As revisões são organizadas em
      ciclos de sprint, utilizando ferramentas como Slack e GitHub, e os
      resultados da revisão são avaliados de forma recorrente.`
    },
    {
      company: 'UNIESP',
      location: 'São Paulo, SP',
      role: 'Assistente de Direção',
      duration: 'ABRIL DE 2013 - SETEMBRO DE 2015',
      description: `Assistência de direção junto a diretoria executiva, auxiliando nas áreas
      administrativas e executivas da empresa nas unidades. Foco em gerenciar
      a relação junto ao MEC e recepcionamento de suas comissões de avaliação.
      Elaboração de projetos, montagem e atualização de laboratórios e
      bibliotecas.`
    },
    {
      company: 'Fácil Informática',
      location: 'Campo Grande, MS',
      role: 'Gerente de TI',
      duration: 'MARÇO DE 2012 - DEZEMBRO DE 2012',
      description: `Gerenciamento da equipe de suporte técnico de TI dos Correios do MS. No
      mês de dezembro coordenei a transição do contrato de suporte técnico de
      TI da Caixa Econômica (MT e MS), visto a empresa, na época, ter recém
      adquirido a licitação para exercer tal serviço.`
    },
  ];

  // constructor() { }

  getExperiences() {
    return this.experiences;
  }
}