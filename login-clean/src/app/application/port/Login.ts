import { Observable } from "rxjs";

export interface Login {
    doLogin(): void;
    lanzarExcepcion(): void;
    getObserbable(): Observable<any>;
    subscribirse(): void;
}
