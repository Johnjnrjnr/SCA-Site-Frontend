import {Component, inject} from '@angular/core';
import {WarenkorbService} from '../services/warenkorb-service/warenkorb-service';

@Component({
  selector: 'app-warenkorb',
  imports: [],
  templateUrl: './warenkorb.html',
  styleUrl: './warenkorb.css'
})
export class Warenkorb {
  warenkorbService = inject(WarenkorbService);


}
