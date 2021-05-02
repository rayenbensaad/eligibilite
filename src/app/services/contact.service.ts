import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://backend.assistantrenovationenergie.fr/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  createNewsletter(data): Observable<any> {
    return this.http.post('https://backend.assistantrenovationenergie.fr/newsletter', data);
  }
}
