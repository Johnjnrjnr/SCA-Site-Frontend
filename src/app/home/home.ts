import {Component, inject} from '@angular/core';
import {DisplayMatrix} from '../blocks/display-matrix/display-matrix';
import {Team} from '../blocks/team/team';

@Component({
  selector: 'app-home',
  imports: [
    Team,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
