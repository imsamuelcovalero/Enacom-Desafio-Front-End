import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCourses should return array', () => {
    const result = service.getCourses();
    expect(Array.isArray(result)).toBe(true);
  });

  it('getCourses should return non-empty array', () => {
    const result = service.getCourses();
    expect(result.length).toBeGreaterThan(0);
  });
});
