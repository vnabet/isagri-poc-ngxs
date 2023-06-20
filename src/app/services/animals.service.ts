import { Injectable } from '@angular/core';
import { Observable, delay, of, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor() { }

  add(name:string):Observable<string> {
    // return timer(2000).pipe(switchMap(()=> name + ' test'))
    return of(name + ' test').pipe(delay(2000))
  }
}
