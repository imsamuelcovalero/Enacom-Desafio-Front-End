import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should toggle dark theme', () => {
    expect(app.darkTheme).toBeFalse();
    app.toggleTheme();
    expect(app.darkTheme).toBeTrue();
  });

  it('should set and get current page correctly', () => {
    const testPage = '/testPage';
    app.setCurrentPage(testPage);
    expect(app.currentPage).toBe('testPage');
  });

  it('should show correct buttons', () => {
    app.setCurrentPage('/home');
    expect(app.showHomeButton).toBeFalse();
    expect(app.showExperiencesButton).toBeTrue();

    app.setCurrentPage('/experiences');
    expect(app.showHomeButton).toBeTrue();
    expect(app.showExperiencesButton).toBeFalse();
  });
});