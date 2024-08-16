import { Injectable } from "@angular/core";
import { LoginAbstract } from "../../../application/port/LoginAbstract";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class LoginAbstractImpl implements LoginAbstract {

    constructor() {}

    //@Override
    doLoginAbstract(): void {
        //Aqui tiene que ir toda mi implementacion
        console.log("doLoginAbstract(): void");
    }
    //@Override
    lanzarExcepcionAbstract(): void {
        //Aqui tiene que ir toda mi implementacion
        console.log("lanzarExcepcionAbstract(): void");
    }

}
