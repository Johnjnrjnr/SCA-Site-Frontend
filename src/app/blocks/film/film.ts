import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

type filmType = 'Kurzfilm' | 'Keine';

@Component({
  selector: 'app-film',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './film.html',
  styleUrl: './film.css'
})
export class Film {
  @Input() title = '';
  @Input() imagePath = '';
  @Input() type:filmType = "Kurzfilm";
  @Input() linkUrl = '';
}
