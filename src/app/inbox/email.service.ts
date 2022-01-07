import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface EmailSumary {
  id: string,
  subject: string,
  from: string,

}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  rootUrl = 'https://api.angular-email.com'

  constructor(private http: HttpClient) { }

  getEmail() {
    return this.http.get<EmailSumary[]>(`${this.rootUrl}/emails`);
  }
}
