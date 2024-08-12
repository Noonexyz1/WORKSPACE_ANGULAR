import { Observable } from "rxjs";

export interface LoginService {
    doLoginService(): void;
    lanzarExcepcionService(): void;
    getObserbableService(): Observable<any>;
    subscribirseService(): void;
}