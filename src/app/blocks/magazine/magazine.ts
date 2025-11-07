import {Component, computed, inject} from '@angular/core';
import {StripeProduct, WarenkorbService} from '../../services/warenkorb-service/warenkorb-service';

@Component({
  selector: 'app-magazine',
  imports: [],
  templateUrl: './magazine.html',
  styleUrl: './magazine.css'
})
export class Magazine {
  warenkorbService = inject(WarenkorbService);
  magazines = computed(() => this.warenkorbService.displayProducts().filter(p => p.productMetadata["itemType"].includes("Magazine")))
  magazine: StripeProduct = {
    productId: "Magazine",
    name: "Mag",
    price: {priceId: "alksd", unit_amount: 20, currency: "CHF"},
    description: "LALJFIDJ IANIEJR NOIAJDLMFJI AFJ LAJHO NFNG AJJOIJLJO ASI KJJF NI NAHJOI JSAKJOI NIJ KLJAJSDMOISHJ NAN OIASJ JLKOéJ",
    images: ["assets/Media/11.jpg"],
    active: true,
    variants: [],
    productMetadata: {}
  }

  addProduct (){
    console.log(JSON.stringify(this.warenkorbService))
    this.warenkorbService.addProduct(this.warenkorbService.products.length, this.magazine)
  }
}
