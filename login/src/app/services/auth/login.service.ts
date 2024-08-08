import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http: HttpClient;

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0, email:''});


  constructor(http: HttpClient) {
    this.http = http;
  }

  login(crendentials: LoginRequest): Observable<User>{
    return this.http.get<User>('/data.json').pipe(
      tap((userData) => {
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    if(error.status === 0){
      console.error('Se ha producido un error ', error.error);
    } else {
      console.error('Backend retorna el codigo de estado ', error.status, error.error);
    }
    return throwError(() => new Error('Algo ha fallado, porfavor intente nuevamente'));
  }

  getUserData():Observable<User>{
    return this.currentUserData.asObservable();
  }

  getUserLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }
}
