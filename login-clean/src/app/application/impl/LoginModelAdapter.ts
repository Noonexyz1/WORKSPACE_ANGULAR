import { Observable } from "rxjs";
import { Login } from "../../domain/port/Login";
import { LoginService } from "../port/LoginService";

export class LoginModelAdapter implements Login {
    
    private loginService: LoginService;

    constructor(loginService: LoginService){
        this.loginService = loginService;
    }


    //@Override
    doLogin(): void {
        this.loginService.doLoginService();
    }
    //@Override
    lanzarExcepcion(): void {
        this.loginService.lanzarExcepcionService();
    }
    //@Override
    getObserbable(): Observable<any> {
        return this.loginService.getObserbableService();
    }
    //@Override
    subscribirse(): void {
        this.loginService.subscribirseService();
    }
}