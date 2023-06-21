import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguagesComponent } from './languages.component';
import { LanguagesService } from '../services/languages/languages.service';
import { FrameworksService } from '../services/languages/frameworks.service';
import { ToolsService } from '../services/languages/tools.service';

describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let fixture: ComponentFixture<LanguagesComponent>;
  let mockLanguagesService;
  let mockFrameworksService;
  let mockToolsService;

  beforeEach(async () => {
    mockLanguagesService = jasmine.createSpyObj(['getLanguages']);
    mockFrameworksService = jasmine.createSpyObj(['getFrameworks']);
    mockToolsService = jasmine.createSpyObj(['getTools']);

    // Configura o retorno dos métodos dos serviços
    mockLanguagesService.getLanguages.and.returnValue([
      { language: 'JavaScript', period: '1 Ano', level: 'Intermediário' },
      { language: 'TypeScript', period: '1 Ano', level: 'Intermediário' }
    ]);

    mockFrameworksService.getFrameworks.and.returnValue([
      { name: 'React', level: 'Intermediário' },
      { name: 'Angular', level: 'Iniciante' }
    ]);

    mockToolsService.getTools.and.returnValue({
      development: ['GitHub', 'VSCode'],
      backend: ['REST API', 'MySQL'],
      agile: ['Slack', 'Trello'],
      design: ['CorelDraw'],
    });

    await TestBed.configureTestingModule({
      declarations: [LanguagesComponent],
      providers: [
        { provide: LanguagesService, useValue: mockLanguagesService },
        { provide: FrameworksService, useValue: mockFrameworksService },
        { provide: ToolsService, useValue: mockToolsService },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LanguagesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('proficiencyLevel', () => {
    it('should return 33 for "Iniciante"', () => {
      expect(component.proficiencyLevel('Iniciante')).toEqual(33);
    });

    it('should return 66 for "Intermediário"', () => {
      expect(component.proficiencyLevel('Intermediário')).toEqual(66);
    });

    it('should return 100 for "Avançado"', () => {
      expect(component.proficiencyLevel('Avançado')).toEqual(100);
    });

    it('should return 0 for unknown level', () => {
      expect(component.proficiencyLevel('unknown')).toEqual(0);
    });
  });

  describe('applySearch', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should filter languages correctly', () => {
      component.applySearch('JavaScript');
      expect(component.languages).toEqual([
        { language: 'JavaScript', period: '1 Ano', level: 'Intermediário' }
      ]);
    });

    it('should filter frameworks correctly', () => {
      component.applySearch('Angular');
      expect(component.frameworks).toEqual([
        { name: 'Angular', level: 'Iniciante' }
      ]);
    });

    it('should filter tools correctly', () => {
      component.applySearch('VSCode');
      expect(component.tools).toContain('VSCode');
      expect(component.tools).not.toContain('GitHub');
    });
  });
});