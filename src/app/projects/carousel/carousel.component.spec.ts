import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Input, Directive } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { IProject } from 'src/app/interfaces/project.interface';

// Mock components
@Directive({
  selector: 'app-project-wrapper'
})
class MockProjectWrapperComponent {
  @Input()
  project!: IProject;
}

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CarouselComponent,
        MockProjectWrapperComponent
      ],
      imports: [NoopAnimationsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;

    // Inicializando a propriedade projects
    component.projects = [
      {
        id: 1,
        name: 'Test Project 1',
        title: 'Test Title',
        description: 'Test Description',
        image: 'test-image.jpg',
        skills: ['Test Skill'],
        linkApp: 'test-app',
        linkGitHub: 'test-github'
      },
      {
        id: 2,
        name: 'Test Project 2',
        title: 'Test Title',
        description: 'Test Description',
        image: 'test-image.jpg',
        skills: ['Test Skill'],
        linkApp: 'test-app',
        linkGitHub: 'test-github'
      }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display ProjectWrapperComponent for each project', () => {
    const projectWrapperElements = fixture.debugElement.queryAll(By.directive(MockProjectWrapperComponent));
    expect(projectWrapperElements.length).toBe(component.projects.length);
  });

  it('should navigate to next and previous project', () => {
    expect(component.currentProjectIndex).toBe(0);

    component.moveNext();
    expect(component.currentProjectIndex).toBe(1);

    component.movePrev();
    expect(component.currentProjectIndex).toBe(0);
  });

  it('should navigate to a specific slide', () => {
    component.goToSlide(1);
    expect(component.currentProjectIndex).toBe(1);
  });
});
