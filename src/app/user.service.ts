import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = new User();
  account: Account = new Account();
  private baseURL ="http://localhost:8080/api/v1/user";
  private baseURL2 ="http://localhost:8080/api/v1/createaccount";
  private baseURL3 = "http://localhost:8080/api/v1/userbyEmail";

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<Object>
  {
    this.user = user;
    return this.httpClient.post(`${this.baseURL}`,this.user);

  }

  createAccount(account: Account): Observable<Object>
  {
    this.account = account;
    return this.httpClient.post(`${this.baseURL2}`,this.account);
  }

  getUser(email: String): Observable<Object>
  {
    return this.httpClient.get(`${this.baseURL3}/${email}`);
  }
}
