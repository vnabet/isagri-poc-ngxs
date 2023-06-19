import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddAnimal } from 'src/app/state/animal.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private store: Store) {}

  addAnimal(name: string) {
    this.store
      .dispatch(new AddAnimal('Chien'))
      .subscribe(() => console.log('jlkjkljlk'));
  }
}
