import { TestBed } from '@angular/core/testing';

import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceService);
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
