import {Component, computed, inject} from '@angular/core';
import {StripeProduct, WarenkorbService} from '../../services/warenkorb-service/warenkorb-service';

@Component({
  selector: 'app-wear',
  imports: [],
  templateUrl: './wear.html',
  styleUrl: './wear.css'
})
export class Wear {
  warenkorbService: WarenkorbService = inject(WarenkorbService);


  selectedItem?: StripeProduct;
  clothingProducts = computed(() =>
    this.warenkorbService
      .displayProducts()
      .filter(item => item.productMetadata?.['itemType']?.includes('clothing'))
  );

  addItem(product: StripeProduct | undefined) {
    if(!product) {
      return;
    }else {
      this.warenkorbService.addProduct(this.warenkorbService.products.length, product);
    }
  }

  setItem(size: string, product: StripeProduct) {
    this.selectedItem = product;
    product.productMetadata = {"size": size};

  }

}
