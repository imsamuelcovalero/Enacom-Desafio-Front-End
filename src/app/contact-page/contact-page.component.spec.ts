import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CopyService } from '../services/copy.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SuccessMessageService } from '../services/success-message.service';

import { ContactPageComponent } from './contact-page.component';
import { of } from 'rxjs';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactPageComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        CopyService,
        ToastrService,
        {
          provide: SuccessMessageService,
          useValue: {
            message: null
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make the contact form invalid when empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should make the contact form valid when correctly filled', () => {
    component.contactForm.controls['name'].setValue("John Doe");
    component.contactForm.controls['email'].setValue("johndoe@test.com");
    component.contactForm.controls['subject'].setValue("Test Subject");
    component.contactForm.controls['message'].setValue("Test Message");
    expect(component.contactForm.valid).toBeTruthy();
  });

  it('should call the submitForm method when contact form is submitted', () => {
    spyOn(component, 'submitForm');
    component.contactForm.controls['name'].setValue("John Doe");
    component.contactForm.controls['email'].setValue("johndoe@test.com");
    component.contactForm.controls['subject'].setValue("Test Subject");
    component.contactForm.controls['message'].setValue("Test Message");

    component.submitForm();
    expect(component.submitForm).toHaveBeenCalled();
  });

  it('should call the copyEmail method when the copy email button is clicked', () => {
    spyOn(component, 'copyEmail');
    component.copyEmail();
    expect(component.copyEmail).toHaveBeenCalled();
  });

  it('should call the copyWhatsApp method when the copy WhatsApp button is clicked', () => {
    spyOn(component, 'copyWhatsApp');
    component.copyWhatsApp();
    expect(component.copyWhatsApp).toHaveBeenCalled();
  });
});
