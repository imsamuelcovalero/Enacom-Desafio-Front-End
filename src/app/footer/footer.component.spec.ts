import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { FooterComponent } from './footer.component';
import { AppService } from '../services/app.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let appService: AppService;

  const mockData = { versao: '1.0', contact: { name: 'John Doe', tel: '123456789', email: 'john@example.com' } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot() // Adicione esta linha
      ],
      declarations: [FooterComponent],
      providers: [AppService, ToastrService] // Adicione ToastrService aos providers
    })
      .compileComponents();

    appService = TestBed.inject(AppService);
    spyOn(appService, 'getInfosAPI').and.returnValue(of(mockData));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getInfosAPI on init', () => {
    expect(appService.getInfosAPI).toHaveBeenCalled();
  });

  it('should set data correctly when getInfosAPI is called', () => {
    expect(component.versao).toBe(mockData.versao);
    expect(component.contact).toEqual(mockData.contact);
  });
});