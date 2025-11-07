import {Component, inject} from '@angular/core';
import {DisplayMatrix} from '../blocks/display-matrix/display-matrix';

@Component({
  selector: 'app-home',
  imports: [
    DisplayMatrix,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
