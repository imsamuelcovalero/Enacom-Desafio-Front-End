import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses = [
    {
      institution: 'HavardX',
      course: "CS50's Introduction to Artificial Intelligence with Python",
      status: 'Cursando',
      period: 'MARÇO DE 2023 - Cursando',
      skills: ['Inteligência Artificial', 'Python', 'Aprendizado de Máquina', 'Redes Neurais', 'Natural Language Processing', 'Search Algorithms', 'Optimization']
    },
    {
      institution: 'Trybe',
      course: 'Desenvolvimento Web',
      status: 'Concluído',
      period: 'JANEIRO DE 2022 – FEVEREIRO DE 2023',
      skills: ['JavaScript', 'Python', 'TypeScript', 'HTML5', 'CSS3', 'Git', 'GitHub', 'Scrum', 'Agile Methodologies', 'Docker', 'SQL', 'MySQL', 'MongoDB', 'REST APIs', 'Sequelize.js', 'Express.js', 'Node.js', 'Jest', 'Redux.js', 'Full-Stack Development', 'Back-End Web Development', 'Front-End Development', 'Project Management', 'Software Development', 'Software Testing', 'Testing Tools', 'Web Development', 'Visual Studio', 'Microsoft Visual Studio Code', 'styled-components', 'React.js']
    },
    {
      institution: 'UNIP (Universidade Paulista)',
      course: 'MBA Gestão Empresarial',
      status: 'Concluído',
      period: 'MARÇO DE 2019 - FEVEREIRO DE 2020',
      skills: ['Gestão de Projetos', 'Planejamento Estratégico', 'Liderança', 'Gestão Financeira', 'Marketing Estratégico', 'Gestão de Pessoas']
    },
    {
      institution: 'UNICEP (Centro Universitário Central Paulista)',
      course: 'Engenharia da Computação',
      status: 'Concluído',
      period: 'JANEIRO DE 2004 - JULHO DE 2011',
      skills: ['Programação', 'Sistemas Operacionais', 'Redes de Computadores', 'Banco de Dados', 'Engenharia de Software', 'Arquitetura de Computadores', 'Automação Industrial']
    },
  ];

  // constructor() { }

  getCourses() {
    return this.courses;
  }
}