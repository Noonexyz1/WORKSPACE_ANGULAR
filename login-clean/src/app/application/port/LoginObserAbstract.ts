import { Observable } from "rxjs";

export interface LoginObserAbstract {
    getObserbableAbstract(): Observable<any>;
    subscribirseAbstract(): void;
}
