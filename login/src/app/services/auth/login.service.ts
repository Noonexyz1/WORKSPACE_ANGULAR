import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  login(crendentials: LoginRequest): Observable<User>{
    return this.http.get<User>('/data.json');
  }
}
