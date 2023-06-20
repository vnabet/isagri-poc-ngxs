import { Animals } from './animals.actions';
import {Injectable} from '@angular/core';
import {State, Action, StateContext} from '@ngxs/store';


@State<string[]>({
  name: 'animals',
  defaults: []
})
@Injectable()
export class AnimalsState {

  @Action(Animals.Add)
  AddAnimal(ctx: StateContext<string[]>, {name}: Animals.Add) {
    // const state = ctx.getState();

    // ctx.setState([
    //   ...state,
    //   action.name
    // ])

    ctx.setState((state: readonly string[]) => {
      return [...state, name]
    })
  }
}