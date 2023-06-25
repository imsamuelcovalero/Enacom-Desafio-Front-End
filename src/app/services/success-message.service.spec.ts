import { TestBed } from '@angular/core/testing';
import { SuccessMessageService } from './success-message.service';

describe('SuccessMessageService', () => {
  let service: SuccessMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuccessMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get the success message correctly', () => {
    const testMessage = 'Test Success Message';
    service.message = testMessage;
    expect(service.message).toBe(testMessage);
  });

  it('should clear the success message when set to null', () => {
    service.message = 'Test Success Message';
    service.message = null;
    expect(service.message).toBeNull();
  });
});
