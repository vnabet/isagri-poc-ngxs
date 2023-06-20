import { Animals } from './animals.actions';
import {Injectable} from '@angular/core';
import {State, Action, StateContext} from '@ngxs/store';
import { AnimalsService } from '../services/animals.service';
import { tap } from 'rxjs';


@State<string[]>({
  name: 'animals',
  defaults: []
})
@Injectable()
export class AnimalsState {

  constructor(private animalsService:AnimalsService) {}

  @Action(Animals.Add)
  AddAnimal(ctx: StateContext<string[]>, {name}: Animals.Add) {
    // const state = ctx.getState();

    // ctx.setState([
    //   ...state,
    //   action.name
    // ])

    // ctx.setState((state: readonly string[]) => {
    //   return [...state, name]
    // })

    return this.animalsService.add(name).pipe(tap((value) => {
      console.log('VALUE', value)
      ctx.setState((state: readonly string[]) => [...state, value])
    }))
  }
}