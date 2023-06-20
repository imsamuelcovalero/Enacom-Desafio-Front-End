import { TestBed } from '@angular/core/testing';

import { ExperiencesService } from './experiences.service';

describe('ExperiencesService', () => {
  let service: ExperiencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperiencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getExperiences should return array', () => {
    const result = service.getExperiences();
    expect(Array.isArray(result)).toBe(true);
  });

  it('getExperiences should return non-empty array', () => {
    const result = service.getExperiences();
    expect(result.length).toBeGreaterThan(0);
  });
});
