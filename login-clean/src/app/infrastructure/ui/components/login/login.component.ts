import { Component } from '@angular/core';
import { LoginServiceImpl } from '../../../impl/LoginServiceImpl';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private loginServiceImpl: LoginServiceImpl;

  constructor(loginServiceImpl: LoginServiceImpl){
    this.loginServiceImpl = loginServiceImpl;
  }

  doLogin(): void {
    this.loginServiceImpl.doLoginService();
  }
}
