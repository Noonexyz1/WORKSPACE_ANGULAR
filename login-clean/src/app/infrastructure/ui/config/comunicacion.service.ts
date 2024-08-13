import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../model/user';

@Injectable({providedIn: 'root'})
export class ComunicacionService {

  private currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private currentUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0, email:''});

  constructor() { }
  
  getUserLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }
  
  getCurrentUserData():Observable<User>{
    return this.currentUserData.asObservable();
  }
}
