import { TestBed } from '@angular/core/testing';
import { FrameworksService } from './frameworks.service';

describe('FrameworksService', () => {
  let service: FrameworksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrameworksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of frameworks', () => {
    const frameworks = service.getFrameworks();
    expect(frameworks).toBeDefined();
    expect(Array.isArray(frameworks)).toBeTrue();
    expect(frameworks.length).toBeGreaterThan(0);
  });

  it('should return frameworks with correct structure', () => {
    const frameworks = service.getFrameworks();
    const framework = frameworks[0];

    expect(framework).toBeDefined();
    expect(framework).toEqual(jasmine.objectContaining({
      name: jasmine.any(String),
      level: jasmine.any(String)
    }));
  });
});
