import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CopyService } from '../services/copy.service';
import { ToastrService } from 'ngx-toastr';
import { SuccessMessageService } from '../services/success-message.service';
import { Router } from '@angular/router';

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
    private toastr: ToastrService,
    private successMessageService: SuccessMessageService,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const successMessage = this.successMessageService.message;
    if (successMessage) {
      this.toastr.success(successMessage);
      this.successMessageService.message = null;
    }
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      // Aqui você pode implementar a lógica para enviar o formulário, talvez através de um serviço
      console.log(this.contactForm.value);
      this.successMessageService.message = 'Sua mensagem foi enviada com sucesso. Nós iremos te retornar em breve!';
      this.contactForm.reset();
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/contact']);
      });
    } else {
      // Exibir erros de validação
      this.toastr.error('Por favor, preencha todos os campos necessários corretamente.');
    }
  }

  copyEmail(): void {
    this.copyService.copyText('reis_samuel@hotmail.com', 'Email copied!');
  }

  copyWhatsApp(): void {
    this.copyService.copyText('11984478895', 'WhatsApp number copied!');
  }
}