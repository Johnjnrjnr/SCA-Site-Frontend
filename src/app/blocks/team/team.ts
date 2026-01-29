import {Component, inject} from '@angular/core';
import {animate, createTimer} from 'animejs';
import {Weather} from '../../services/weather/weather';


@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team {

  weather = inject(Weather);

  date = new Date()
  ms = 0;
  seconds = 0;
  minutes = this.date.getMinutes();
  hours = this.date.getHours();
  timer = createTimer({
    duration: 1000,
    loop: true,
    onUpdate: self => this.ms = self.currentTime,
    onLoop: self => self.currentTime = this.resetms(),
  })
  resetms(){
    this.ms = 0;
    if(this.seconds >= 59) {
      this.seconds = 0;
      this.minutes++;
    }else{
      this.seconds++;
    }
    return 0;
  }



  ngOnInit() {
    let currentColors = this.paletteForHour(this.date.getHours());
    animate('.weatherTime', {
      '--sun-x': 100/24 * this.date.getHours(),
      '--sky1' : currentColors["sky1"],
      '--sky2' : currentColors["sky2"],
      '--glow': currentColors["glow"],
    });
  }


  paletteForHour(h: number) {
    if (h < 5)  return { sky1: '#030515', sky2: '#06142b', glow: '#7aa2ff' };
    if (h < 8)  return { sky1: '#0a1230', sky2: '#2b2a6d', glow: '#ffb86b' };
    if (h < 17) return { sky1: '#0b2a5b', sky2: '#38bdf8', glow: '#ffc616' };
    if (h < 20) return { sky1: '#1b1340', sky2: '#ff5a7a', glow: '#ffcc66' };
    return        { sky1: '#030515', sky2: '#06142b', glow: '#7aa2ff' };
  }

  private clamp(v: number, min: number, max: number) {
    return Math.max(min, Math.min(max, v));
  }
}
