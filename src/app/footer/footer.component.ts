/* File: src/app/footer/footer.component.ts */
import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  versao = '1.0';
  contact = { name: '', tel: '', email: '' };

  constructor(
    private appService: AppService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getInfosAPI();
  }

  getInfosAPI(): void {
    this.appService.getInfosAPI().subscribe({
      next: (data) => {
        console.log('Informações da API obtidas com sucesso!', data);

        if (data.versao) {
          this.versao = data.versao;
        }
        if (data.contact) {
          this.contact = data.contact;
        }
        // this.toastr.success('Informações da API obtidas com sucesso!');
      },
      error: (error) => {
        console.error('Erro ao buscar informações da API', error);
        this.toastr.error('Erro ao buscar informações da API');
      }
    });
  }
}