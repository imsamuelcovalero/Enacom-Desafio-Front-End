/* File: src/app/services/copy.service.ts */
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CopyService {

  constructor(private snackBar: MatSnackBar) { }

  copyText(text: string, message: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.showMessage(message);
    });
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }
}