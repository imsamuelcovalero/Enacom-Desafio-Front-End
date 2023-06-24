import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render toolbar', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar')).toBeTruthy();
  });

  it('should render navigation list', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-nav-list')).toBeTruthy();
  });

  it('should render 5 list items inside navigation list', () => {
    const navList = fixture.debugElement.query(By.css('mat-nav-list'));
    const items = navList.queryAll(By.css('a[mat-list-item]'));
    expect(items.length).toBe(5);
  });
});