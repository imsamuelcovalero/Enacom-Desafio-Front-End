import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperiencesComponent } from './professional-experiences.component';

describe('ProfessionalExperiencesComponent', () => {
  let component: ProfessionalExperiencesComponent;
  let fixture: ComponentFixture<ProfessionalExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalExperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
