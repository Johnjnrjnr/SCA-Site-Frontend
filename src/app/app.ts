import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SiteNav} from './site-nav/site-nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sca-site');

}
