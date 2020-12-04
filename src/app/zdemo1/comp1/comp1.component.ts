import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  count: number;
}
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(private store: Store<AppState>) {
    this.count$ = store.pipe(select('count'));
  }

  count$: Observable<number>;

  ngOnInit(): void {
  }

}
