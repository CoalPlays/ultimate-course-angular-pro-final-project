
import {BehaviorSubject, Observable} from "rxjs";
import {distinctUntilChanged, pluck} from "rxjs/operators";
import {Injectable} from "@angular/core";

export interface State {
  [key: string]: any
}

const state: State = {};
@Injectable()
export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
