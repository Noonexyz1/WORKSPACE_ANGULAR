import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginAbstract } from "../../../application/port/LoginAbstract";
import { Router } from "@angular/router";
import { accountModelLogin } from "../model/AccountModel";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class LoginImplService implements LoginAbstract {

    private loginForm: FormGroup;
    private routerService: Router;

    constructor(formBuilder: FormBuilder, routerService: Router) {
        this.loginForm = formBuilder.group(accountModelLogin);
        this.routerService = routerService;
    }

    //Aqui tiene que ir toda mi implementacion

    //@Override
    doLoginAbstract(): void {
        console.log("doLoginAbstract(): void");
    }
    //@Override
    lanzarExcepcionAbstract(): void {
        console.log("lanzarExcepcionAbstract(): void");
    }
    //@Override
    getObserbableAbstract(): Observable<any> {
        console.log("getObserbableAbstract(): Observable<any>");
        return new Observable();
    }
    //@Override
    subscribirseAbstract(): void {
        console.log("subscribirseAbstract(): void");
    }
}
