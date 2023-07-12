import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, delay, from, map, mergeAll, mergeMap, of, switchMap } from 'rxjs';
import { Animals } from 'src/app/state/animals.actions';
import { AnimalsState } from 'src/app/state/animals.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  // @Select(AnimalsState) animals$!: Observable<string[]>
  @Select() animals$!: Observable<string[]>

  constructor(private store: Store) {}

  addAnimal(name: string) {
    this.store
      .dispatch(new Animals.Add(name))
      .subscribe(() => console.log('jlkjkljlk'));
  }

  testo() {
    const getData = (param:any) => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(2000)
      )
    }
    
    // using a regular map
    // from([1,2,3,4]).pipe(
    //   map(param => getData(param))
    // ).subscribe(val => val.subscribe(data => console.log(data)));
    
    // using mergeMap
    from([1,2,3,4]).pipe(
      mergeMap(param => getData(param))
      //switchMap(param => getData(param))
    ).subscribe(val => console.log(val));
  }
}
