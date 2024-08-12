import { Login } from "../../domain/port/Login";
import { LoginService } from "../port/LoginService";

export class LoginModelAdapter implements Login {

    private loginService: LoginService;

    constructor(loginService: LoginService){
        this.loginService = loginService;
    }
    
    //@Override
    lanzarExcepcion(): void {
        this.loginService.lanzarExcepcionService();
    }
    //@Override
    doLogin(): void {
        this.loginService.doLoginService();
    }
}