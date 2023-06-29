import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { By } from '@angular/platform-browser';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call search method when the model changes', () => {
    spyOn(component, 'search');
    component.currentTerm = 'test term';
    component.search(component.currentTerm);
    expect(component.search).toHaveBeenCalledWith('test term');
  });

  it('should emit searchTerm event with correct term when the model changes', () => {
    spyOn(component.searchTerm, 'emit');
    component.currentTerm = 'test term';
    component.search(component.currentTerm);
    expect(component.searchTerm.emit).toHaveBeenCalledWith('test term');
  });
});
