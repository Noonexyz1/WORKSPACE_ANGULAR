import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { accountModelLogin } from './model/AccountModel';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../services/auth/loginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginError: string = "";

  private loginForm: FormGroup;
  private routerService: Router;
  private loginService: LoginService;

  constructor(formBuilder: FormBuilder, routerService: Router, loginService: LoginService) {
    this.loginForm = formBuilder.group(accountModelLogin);
    this.routerService = routerService;
    this.loginService = loginService;
  }


  getEmailAtribute(): any {
    return this.loginForm.controls['emailAtribute'];
  }
  getPasswordAtribute(): any {
    return this.loginForm.controls['passwordAtribute'];
  }

  getLoginForm(): FormGroup {
    return this.loginForm;
  }

  doLogin(): void {
    if (this.loginForm.valid) {
      alert("Llamar al servicio de login");
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {console.log(userData)},
        error: (errorData) => {
          console.error(errorData);
          this.loginError = errorData
        },
        complete: () => {
          console.info("Login Completo")
          this.routerService.navigateByUrl('/inicio');
          this.loginForm.reset();
        }
      });
    } else {
      alert("Error al ingresar los datos");
    }
  }
}