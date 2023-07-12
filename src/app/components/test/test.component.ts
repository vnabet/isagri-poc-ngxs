import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AnimalsState } from 'src/app/state/animals.state';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @Select(AnimalsState.lettreC) lettreC$!:Observable<string[]>;

  @Select(AnimalsState.lettre('b')) lettreB$!:Observable<string[]>;

}
