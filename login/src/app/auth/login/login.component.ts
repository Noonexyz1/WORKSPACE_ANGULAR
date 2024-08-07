import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { accountModelLogin } from './model/AccountModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private loginForm: FormGroup;
  private routerService: Router;

  constructor(formBuilder: FormBuilder, routerService: Router) {
    this.loginForm = formBuilder.group(accountModelLogin);
    this.routerService = routerService;
  }

  getLoginForm(): FormGroup {
    return this.loginForm;
  }

  doLogin(): void {
    if (this.loginForm.valid) {
      alert("Llamar al servicio de login");
      this.routerService.navigateByUrl('/inicio');
      this.loginForm.reset();
    } else {
      alert("Error al ingresar los datos");
    }
  }
}