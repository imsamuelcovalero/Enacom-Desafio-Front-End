/* File: src/app/courses/courses.component.spec.ts */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import { CoursesService } from '../services/courses.service';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let coursesService: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      providers: [CoursesService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    coursesService = TestBed.inject(CoursesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load courses on init', () => {
    const coursesSpy = spyOn(coursesService, 'getCourses').and.callThrough();
    component.ngOnInit();
    expect(coursesSpy).toHaveBeenCalled();
    expect(component.courses).toEqual(coursesService.getCourses());
  });

  it('should filter courses by search term', () => {
    const searchTerm = 'python';
    component.applySearch(searchTerm);
    const filteredCourses = coursesService.getCourses().filter(course =>
      course.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    expect(component.courses).toEqual(filteredCourses);
  });
});
