/* File: src/app/services/languages/languages.service.ts */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  private languages = [
    {
      language: 'JavaScript',
      period: '1 Ano',
      level: 'Intermediário'
    },
    {
      language: 'TypeScript',
      period: '1 Ano',
      level: 'Intermediário'
    },
    {
      language: 'Node.js',
      period: '1 Ano',
      level: 'Intermediário'
    },
    {
      language: 'Python',
      period: '1 Ano',
      level: 'Iniciante'
    },
    {
      language: 'C#',
      period: '1 Ano',
      level: 'Iniciante'
    },
    // add more languages here...
  ];

  getLanguages() {
    return this.languages;
  }
}