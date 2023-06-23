/* File: src/app/services/projects.service.spec.ts */
import { TestBed } from '@angular/core/testing';
import { ProjectsService } from './projects.service';

const IMAGES_URL = 'assets/images';

const projects = [
  {
    id: 1,
    name: 'Trybetunes',
    title: 'Aplicativo de player de músicas',
    description: 'Trybetunes é um projeto/aplicação desenvolvida no curso da Trybe em React.js que acessa uma API de músicas e cria um ambiente em que o usuário pode, dentro de sua conta, ouvir e favoritar músicas.',
    image: `${IMAGES_URL}/trybetunes.gif`,
    skills: ['JavaScript', 'React', 'Styled Components CSS'],
    linkApp: 'https://project-tryetunes.vercel.app/',
    linkGitHub: 'https://github.com/holygato/Project-Trybetunes',
  },
];

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct list of projects', () => {
    const expectedProjects = [projects[0]]; // Apenas o primeiro projeto
    const actualProjects = service.getProjects();

    // Verifica se o primeiro projeto no array retornado é igual ao esperado
    expect(actualProjects[0]).toEqual(expectedProjects[0]);
  });
});
