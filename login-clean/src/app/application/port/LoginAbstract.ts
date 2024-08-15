import { Observable } from "rxjs";

export interface LoginAbstract {
    doLoginAbstract(): void;
    lanzarExcepcionAbstract(): void;
    getObserbableAbstract(): Observable<any>;
    subscribirseAbstract(): void;
}
