import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INCREMENT, DECREMENT, RESET } from '../../store/counter';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  count$: Observable<number>;

  ngOnInit(): void {
  }
  increment() {
    this.store.dispatch({ type: INCREMENT });
  }
  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }
  reset() {
    this.store.dispatch({ type: RESET });
  }
}
