import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({providedIn: 'root'})
export class ComunicacionService {

  private currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0, email:''});

  constructor() { }


  getUserLoginOnObservable(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }
  publicarUserLoginOn(valor: any): void {
    this.currentUserLoginOn.next(valor);
  }
  
  getCurrentUserDataObservable():Observable<User>{
    return this.currentUserData.asObservable();
  }
  publicarCurrentUserData(valor: any): void {
    this.currentUserData.next(valor);
  }
}
