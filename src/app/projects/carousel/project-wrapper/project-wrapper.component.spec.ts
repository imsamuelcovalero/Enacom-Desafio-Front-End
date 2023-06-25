import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Input, Directive } from '@angular/core';
import { ProjectWrapperComponent } from './project-wrapper.component';
import { IProject } from 'src/interfaces/project.interface';

// Mock components
@Directive({
  selector: 'app-project'
})
class MockProjectComponent {
  @Input()
  project!: IProject;
}

@Directive({
  selector: 'app-project-comments'
})
class MockProjectCommentsComponent {
  @Input()
  project!: IProject;
}

describe('ProjectWrapperComponent', () => {
  let component: ProjectWrapperComponent;
  let fixture: ComponentFixture<ProjectWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectWrapperComponent,
        MockProjectComponent,
        MockProjectCommentsComponent
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWrapperComponent);
    component = fixture.componentInstance;

    // Inicializando a propriedade project
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

  it('should display ProjectComponent and ProjectCommentsComponent correctly', () => {
    component.showComments = true;
    fixture.detectChanges();

    const projectElement = fixture.debugElement.query(By.directive(MockProjectComponent));
    expect(projectElement).toBeTruthy();

    const projectCommentsElement = fixture.debugElement.query(By.directive(MockProjectCommentsComponent));
    expect(projectCommentsElement).toBeTruthy();
  });

  it('should toggle showComments when toggleComments is called', () => {
    expect(component.showComments).toBeFalse();

    component.toggleComments();
    expect(component.showComments).toBeTrue();

    component.toggleComments();
    expect(component.showComments).toBeFalse();
  });
});
