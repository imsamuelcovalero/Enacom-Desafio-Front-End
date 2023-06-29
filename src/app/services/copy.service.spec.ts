import { TestBed } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { CopyService } from './copy.service';

describe('CopyService', () => {
  let service: CopyService;
  let toastr: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()]  // Adicione ToastrModule ao TestBed
    });
    service = TestBed.inject(CopyService);
    toastr = TestBed.inject(ToastrService);  // Injete ToastrService em vez de MatSnackBar
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should copy text and show a message', (done) => {
    const text = 'Test text';
    const message = 'Message test';
    const toastrSpy = spyOn(toastr, 'success').and.stub();  // Altere para espionar o método 'success' do ToastrService
    const clipboardSpy = spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());

    service.copyText(text, message);

    setTimeout(() => {
      expect(clipboardSpy).toHaveBeenCalledWith(text);
      expect(toastrSpy).toHaveBeenCalledWith(message);  // Não estamos mais passando argumentos adicionais para o método 'success'
      done();
    }, 1000);
  });
});