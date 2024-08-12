import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginService } from "../../application/port/LoginService";
import { Router } from "@angular/router";
import { accountModelLogin } from "../model/AccountModel";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class LoginServiceImpl implements LoginService {

    private loginForm: FormGroup;
    private routerService: Router;

    constructor(formBuilder: FormBuilder, routerService: Router) {
        this.loginForm = formBuilder.group(accountModelLogin);
        this.routerService = routerService;
    }

    
    //@Override
    doLoginService(): void {
        throw new Error("Method not implemented.");
    }
    //@Override
    lanzarExcepcionService(): void {
        throw new Error("Method not implemented.");
    }
    //@Override
    getObserbableService(): Observable<any> {
        throw new Error("Method not implemented.");
    }
    //@Override
    subscribirseService(): void {
        throw new Error("Method not implemented.");
    }
}