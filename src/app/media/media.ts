import { Component } from '@angular/core';
import {Film} from '../blocks/film/film';
import {Fotografie} from '../blocks/fotografie/fotografie';
import {Magazine} from '../blocks/magazine/magazine';

@Component({
  selector: 'app-media',
  imports: [
    Film,
    Fotografie,
    Magazine
  ],
  templateUrl: './media.html',
  styleUrl: './media.css'
})
export class Media {

}
