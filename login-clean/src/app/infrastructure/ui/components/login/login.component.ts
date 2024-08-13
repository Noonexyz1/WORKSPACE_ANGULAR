import { Component } from '@angular/core';
import { LoginServiceImpl } from '../../../impl/LoginServiceImpl';
import { ComunicacionService } from '../../config/comunicacion.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private loginServiceImpl: LoginServiceImpl;
  private comunicacionService: ComunicacionService;

  constructor(loginServiceImpl: LoginServiceImpl, comunicacionService: ComunicacionService){
    this.loginServiceImpl = loginServiceImpl;
    this.comunicacionService = comunicacionService;
  }

  doLogin(): void {
    this.loginServiceImpl.doLoginService();
    this.comunicacionService.getUserLoginOn();
  }
}
