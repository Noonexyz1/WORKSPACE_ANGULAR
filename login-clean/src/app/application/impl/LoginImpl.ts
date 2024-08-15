import { Observable } from "rxjs";
import { LoginAbstract } from "../port/LoginAbstract";
import { Login } from "../port/Login";

//Mi Adapter
export class LoginImpl implements Login {
    
    private loginAbstract: LoginAbstract;

    constructor(loginAbstract: LoginAbstract){
        this.loginAbstract = loginAbstract;
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
        return this.loginAbstract.getObserbableAbstract();
    }
    //@Override
    subscribirse(): void {
        this.loginAbstract.subscribirseAbstract();
    }
}
