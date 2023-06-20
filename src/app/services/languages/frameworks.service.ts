import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrameworksService {

  private frameworks = [
    {
      name: 'React',
      // period: '1 Ano',
      level: 'Intermediário'
    },
    {
      name: 'Vue',
      // period: '1 Ano',
      level: 'Iniciante'
    },
    {
      name: 'Angular',
      // period: '1 Ano',
      level: 'Iniciante'
    },
    {
      name: 'Redux',
      // period: '1 Ano',
      level: 'Intermediário'
    },
    {
      name: 'RTL',
      // period: '1 Ano',
      level: 'Intermediário'
    },
    {
      name: 'Styled Components',
      // period: '1 Ano',
      level: 'Intermediário'
    },
    {
      name: 'Toast UI',
      // period: '1 Ano',
      level: 'Intermediário'
    },
    {
      name: 'Angular Material',
      // period: '1 Ano',
      level: 'Iniciante'
    },
    {
      name: 'Vuetify',
      // period: '1 Ano',
      level: 'Iniciante'
    },
    {
      name: 'Jest',
      // period: '1 Ano',
      level: 'Intermediário'
    },
    {
      name: 'Jasmine',
      // period: '1 Ano',
      level: 'Iniciante'
    },
    {
      name: 'Karma',
      // period: '1 Ano',
      level: 'Iniciante'
    },
  ];

  getFrameworks() {
    return this.frameworks;
  }
}