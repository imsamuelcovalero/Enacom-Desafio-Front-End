import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { CopyService } from './copy.service';

describe('CopyService', () => {
  let service: CopyService;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule]
    });
    service = TestBed.inject(CopyService);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should copy text and show a message', (done) => {
    const text = 'Test text';
    const message = 'Message test';
    const snackBarSpy = spyOn(snackBar, 'open').and.stub();
    const clipboardSpy = spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());

    service.copyText(text, message);

    setTimeout(() => {
      expect(clipboardSpy).toHaveBeenCalledWith(text);
      expect(snackBarSpy).toHaveBeenCalledWith(message, 'Close', {
        duration: 2000,
      });
      done();
    }, 1000);
  });
});