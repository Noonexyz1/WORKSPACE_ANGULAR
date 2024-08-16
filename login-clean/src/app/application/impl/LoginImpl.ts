import { Observable } from "rxjs";
import { LoginAbstract } from "../port/LoginAbstract";
import { Login } from "../port/Login";
import { LoginObserAbstract } from "../port/LoginObserAbstract";

//Mi Adapter
export class LoginImpl implements Login {
    
    private loginAbstract: LoginAbstract;
    private loginObserAbstract: LoginObserAbstract

    constructor(loginAbstract: LoginAbstract, loginObserAbstract: LoginObserAbstract){
        this.loginAbstract = loginAbstract;
        this.loginObserAbstract = loginObserAbstract;
    }


    //@Override
    doLogin(): void {
        this.loginAbstract.doLoginAbstract();
    }
    //@Override
    lanzarExcepcion(): void {
        this.loginAbstract.lanzarExcepcionAbstract();
    }
    //@Override
    getObserbable(): Observable<any> {
        return this.loginObserAbstract.getObserbableAbstract();
    }
    //@Override
    subscribirse(): void {
        this.loginObserAbstract.subscribirseAbstract();
    }
}
