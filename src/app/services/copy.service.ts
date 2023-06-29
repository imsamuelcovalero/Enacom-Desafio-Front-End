/* File: src/app/services/copy.service.ts */
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CopyService {

  constructor(private toastr: ToastrService) { }

  copyText(text: string, message: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.showMessage(message);
    });
  }

  private showMessage(message: string): void {
    this.toastr.success(message);
  }
}
