import { Component, inject } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {WarenkorbService} from '../services/warenkorb-service/warenkorb-service';

@Component({
  selector: 'app-site-nav',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.css'
})
export class SiteNav {
  warenkorbService = inject(WarenkorbService);
}
