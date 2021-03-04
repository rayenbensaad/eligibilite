import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://152.228.130.141:8000/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
