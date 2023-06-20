import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  private tools = {
    development: [
      'GitHub',
      'VSCode',
      'HTML5',
      'CSS3',
      'Docker',
      'Axios',
      'HttpClient',
    ],
    backend: [
      'REST API',
      'MySQL',
      'ExpressJS',
      'Sequelize',
      'JWT',
      'Joi',
      'Chai',
      'Mocha',
      'MongoDB',
      'PostgreSQL',
      'SOLID',
      'Hapi/Boom',
      'Inquirer',
      'bcrypt',
    ],
    agile: [
      'Slack',
      'Trello',
      'Scrum',
      'Kanban',
    ],
    design: [
      'CorelDraw',
    ],
  };

  getTools() {
    return this.tools;
  }
}