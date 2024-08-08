import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
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
    return this.http.get<User>('/data.json').pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if(error.status === 0){
      console.error('Se ha producido un error ', error.error);
    } else {
      console.error('Backend retorna el codigo de estado ', error.status, error.error);
    }
    return throwError(() => new Error('Algo ha fallado, porfavor intente nuevamente'));
  }
}
