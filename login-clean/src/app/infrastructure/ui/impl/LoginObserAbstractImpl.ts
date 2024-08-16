import { Observable } from "rxjs";
import { LoginObserAbstract } from "../../../application/port/LoginObserAbstract";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class LoginObserAbstractImpl implements LoginObserAbstract {

    constructor(){}

    //@Override
    getObserbableAbstract(): Observable<any> {
        //Aqui tiene que ir toda mi implementacion
        console.log("getObserbableAbstract(): Observable<any>");
        return new Observable();
    }
    //@Override
    subscribirseAbstract(): void {
        //Aqui tiene que ir toda mi implementacion
        console.log("subscribirseAbstract(): void");
    }
}