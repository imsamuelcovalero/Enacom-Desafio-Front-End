import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';  // Adicione esta linha
import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;

    component.project = {
      id: 1,
      name: 'Test Project',
      title: 'Test Title',
      description: 'Test Description',
      image: 'test-image.jpg',
      skills: ['Test Skill'],
      linkApp: 'test-app',
      linkGitHub: 'test-github'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Teste para verificar se os detalhes do projeto estão sendo exibidos corretamente
  it('should display project details correctly', () => {
    const projectNameElement = fixture.debugElement.query(By.css('.project h2')).nativeElement;
    expect(projectNameElement.textContent).toEqual('Test Project');

    const projectDescriptionElement = fixture.debugElement.query(By.css('.project-description')).nativeElement;
    expect(projectDescriptionElement.textContent).toEqual('Test Description');

    const projectSkillsElement = fixture.debugElement.query(By.css('.project-skills p')).nativeElement;
    expect(projectSkillsElement.textContent).toEqual('Test Skill');
  });

  // Teste para verificar o comportamento do método 'toggleComments'
  it('should toggle showComments when toggleComments is called', () => {
    expect(component.showComments).toBeFalse();

    component.toggleComments();
    expect(component.showComments).toBeTrue();

    component.toggleComments();
    expect(component.showComments).toBeFalse();
  });
});
