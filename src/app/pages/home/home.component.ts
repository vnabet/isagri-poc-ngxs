import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Animals } from 'src/app/state/animals.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private store: Store) {}

  addAnimal(name: string) {
    this.store
      .dispatch(new Animals.Add('Chien'))
      .subscribe(() => console.log('jlkjkljlk'));
  }
}
