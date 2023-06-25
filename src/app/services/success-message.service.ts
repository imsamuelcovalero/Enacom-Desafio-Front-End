/* File: src/app/services/success-message.service.ts */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SuccessMessageService {
  private _message!: string | null;

  get message(): string | null {
    return this._message;
  }

  set message(value: string | null) {
    this._message = value;
  }
}