import { Observable } from "rxjs";
import 'rxjs/add/operator/toPromise';

function giveMePromiseFromObservable() {
    return Observable.fromArray([1, 2, 3, 4, 5])
        .filter(x => x > 2)
        .map(x => x * 2)
        .toPromise();
}