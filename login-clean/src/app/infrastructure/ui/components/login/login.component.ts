import { Component } from '@angular/core';
import { Login } from '../../../../application/port/Login';
import { LoginAbstractImpl } from '../../impl/LoginAbstractImpl';
import { LoginImpl } from '../../../../application/impl/LoginImpl';
import { LoginObserAbstractImpl } from '../../impl/LoginObserAbstractImpl';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private loginImplelent: Login;

  constructor(loginAbstract: LoginAbstractImpl, loginObserAbstract: LoginObserAbstractImpl){
    this.loginImplelent = new LoginImpl(loginAbstract, loginObserAbstract);
  }

  doLogin(): void {
    this.loginImplelent.doLogin();
  }
}
