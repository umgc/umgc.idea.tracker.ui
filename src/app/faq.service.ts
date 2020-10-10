import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faq } from './faq';


@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private baseURL = "http://localhost:8080/api/v1/faq"

  constructor(private httpClient: HttpClient) { }

  getFaqList(): Observable<Faq[]>{

    return this.httpClient.get<Faq[]>(`${this.baseURL}`);
}
}
