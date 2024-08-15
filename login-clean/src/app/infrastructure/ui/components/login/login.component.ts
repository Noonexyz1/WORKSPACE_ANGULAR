import { Component } from '@angular/core';
import { LoginImplService } from '../../service/loginImpl.service';
import { ComunicacionService } from '../../service/comunicacion.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private loginImplService: LoginImplService;
  private comunicacionService: ComunicacionService;

  constructor(loginImplService: LoginImplService, comunicacionService: ComunicacionService){
    this.loginImplService = loginImplService;
    this.comunicacionService = comunicacionService;
  }

  doLogin(): void {
    this.loginImplService.doLoginAbstract();
    this.comunicacionService.getUserLoginOnObservable();
  }
}
