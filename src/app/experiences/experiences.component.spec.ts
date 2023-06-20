import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperiencesComponent } from './experiences.component';
import { ExperiencesService } from '../services/experiences.service';

describe('ExperiencesComponent', () => {
  let component: ExperiencesComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;
  let experienceService: ExperiencesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperiencesComponent],
      providers: [ExperiencesService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    experienceService = TestBed.inject(ExperiencesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load experiences on init', () => {
    const experiencesSpy = spyOn(experienceService, 'getExperiences').and.callThrough();
    component.ngOnInit();
    expect(experiencesSpy).toHaveBeenCalled();
    expect(component.experiences).toEqual(experienceService.getExperiences());
  });

  it('should filter experiences by search term', () => {
    const searchTerm = 'Trybe';
    component.applySearch(searchTerm);
    const filteredExperiences = experienceService.getExperiences().filter(experience =>
      experience.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    expect(component.experiences).toEqual(filteredExperiences);
  });
});
