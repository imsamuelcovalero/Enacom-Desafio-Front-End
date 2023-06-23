import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Input, Directive } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from '../services/projects.service';
import { IProject } from '../interfaces/project.interface';

// Mock service
class MockProjectsService {
  getProjects() {
    return [
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
    ] as IProject[];
  }
}

// Mock component
@Directive({
  selector: 'app-carousel'
})
class MockCarouselComponent {
  @Input()
  projects!: IProject[];
}

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let mockProjectsService: MockProjectsService;

  beforeEach(async () => {
    mockProjectsService = new MockProjectsService();

    await TestBed.configureTestingModule({
      declarations: [ProjectsComponent, MockCarouselComponent],
      providers: [
        { provide: ProjectsService, useValue: mockProjectsService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch projects on init', () => {
    const projectsSpy = spyOn(mockProjectsService, 'getProjects').and.callThrough();
    component.ngOnInit();
    expect(projectsSpy).toHaveBeenCalled();
  });

  it('should pass projects to CarouselComponent', () => {
    const carouselElement = fixture.debugElement.query(By.directive(MockCarouselComponent));
    expect(carouselElement).toBeTruthy();
    expect(carouselElement.componentInstance.projects).toBe(component.projects);
  });
});
