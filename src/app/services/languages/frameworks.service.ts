/* File: src/app/services/languages/frameworks.service.ts */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrameworksService {

  private frameworks = [
    {
      name: 'React',
      level: 'Intermediário'
    },
    {
      name: 'Vue',
      level: 'Iniciante'
    },
    {
      name: 'Angular',
      level: 'Iniciante'
    },
    {
      name: 'Redux',
      level: 'Intermediário'
    },
    {
      name: 'RTL',
      level: 'Intermediário'
    },
    {
      name: 'Styled Components',
      level: 'Intermediário'
    },
    {
      name: 'Toast UI',
      level: 'Intermediário'
    },
    {
      name: 'Angular Material',
      level: 'Iniciante'
    },
    {
      name: 'Vuetify',
      level: 'Iniciante'
    },
    {
      name: 'Jest',
      level: 'Intermediário'
    },
    {
      name: 'Jasmine',
      level: 'Iniciante'
    },
    {
      name: 'Karma',
      level: 'Iniciante'
    },
  ];

  getFrameworks() {
    return this.frameworks;
  }
}