import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "../../application/port/LoginService";
import { Router } from "@angular/router";
import { accountModelLogin } from "../model/AccountModel";

export class LoginServiceImpl implements LoginService {

    private loginForm: FormGroup;
    private routerService: Router;
    private loginService: LoginService;

    constructor(formBuilder: FormBuilder, routerService: Router, loginService: LoginService) {
        this.loginForm = formBuilder.group(accountModelLogin);
        this.routerService = routerService;
        this.loginService = loginService;
    }
    
    //@Override
    doLoginService(): void {
        throw new Error("Method not implemented.");
    }
    //@Override
    lanzarExcepcionService(): void {
        throw new Error("Method not implemented.");
    }
}