import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit, OnDestroy{
  userLoginOn: boolean = false;

  private loginService: LoginService;

  constructor(loginService: LoginService){
    this.loginService = loginService;
  }

  //@Override para inicializaciones antes de renderizar el componente
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn) => {
          this.userLoginOn=userLoginOn;
        }
      }
    );
  }
  //@Override para inicializaciones antes de renderizar el componente
  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe();
  }
}
