/* File: src/app/contact-page/contact-page.component.ts */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CopyService } from '../services/copy.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private copyService: CopyService,
    private toastr: ToastrService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // sem código no momento
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      // Aqui você pode implementar a lógica para enviar o formulário, talvez através de um serviço
      console.log(this.contactForm.value);
      this.toastr.success('Your message has been sent successfully. We will get back to you soon!');
      this.contactForm.reset();
    } else {
      // Exibir erros de validação
      this.toastr.error('Please fill out all required fields correctly.');
    }
  }

  copyEmail(): void {
    this.copyService.copyText('reis_samuel@hotmail.com', 'Email copied!');
  }

  copyWhatsApp(): void {
    this.copyService.copyText('11984478895', 'WhatsApp number copied!');
  }
}