/* File: src/services/app.service.ts */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail';

  constructor(private http: HttpClient) { }

  getInfosAPI(): Observable<any> {
    return this.http.get(this.url);
  }
}