import { TestBed } from '@angular/core/testing';
import { LanguagesService } from './languages.service';

describe('LanguagesService', () => {
  let service: LanguagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an array of languages', () => {
    const languages = service.getLanguages();
    expect(languages).toBeDefined();
    expect(Array.isArray(languages)).toBeTrue();
    expect(languages.length).toBeGreaterThan(0);
  });

  it('should return languages with correct structure', () => {
    const languages = service.getLanguages();
    const language = languages[0];

    expect(language).toBeDefined();
    expect(language).toEqual(jasmine.objectContaining({
      language: jasmine.any(String),
      period: jasmine.any(String),
      level: jasmine.any(String)
    }));
  });
});
