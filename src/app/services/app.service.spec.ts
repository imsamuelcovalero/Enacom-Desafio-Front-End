import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifique se não há solicitações pendentes.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data using GET', () => {
    const dummyData = [{ id: '1', name: 'Test' }];

    service.getInfosAPI().subscribe(data => {
      expect(data.length).toBe(1);
      expect(data).toEqual(dummyData);
    });

    const req = httpMock.expectOne(req => req.method === 'GET' && req.url.includes('sendEmail'));

    expect(req.request.method).toBe('GET');

    req.flush(dummyData); // Simula o retorno do servidor.
  });
});
