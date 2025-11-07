import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-fotografie',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './fotografie.html',
  styleUrl: './fotografie.css'
})
export class Fotografie {
  pics: string[] = [];
  showMore: boolean = false;
  constructor() {
    for (let i = 0; i < 85; i++) {
      this.pics[i] = (i + 1).toString() + ".jpg";
    }
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}
