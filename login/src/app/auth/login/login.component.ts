import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'; //Esto ya esta injectado en Angular
import { accountModelLogin } from './model/AccountModel';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private formBuilder: FormBuilder;
  
  //Estamos traendo la dependencia que ya esta injectado en Angular
  constructor(formBuilder: FormBuilder){
    this.formBuilder = formBuilder;
  }
  
  getLoginFormGroup(): FormGroup | any {
    return this.formBuilder.group(accountModelLogin);
  }
}
