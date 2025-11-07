import {Component, computed, Injectable, OnInit, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';


@Component({
  selector: 'app-warenkorb-service',
  imports: [],
  templateUrl: './warenkorb-service.html',
  styleUrl: './warenkorb-service.css'
})
@Injectable ({
  providedIn: 'root'
})

export class WarenkorbService {
  products: Purchase[] = [];
  stripeProducts: StripeProduct[] = [];
  current = signal(this.products)
  readonly count = signal(this.products.length);
  total = signal(0);
  readonly displayProducts = signal(this.stripeProducts);
  constructor(private http: HttpClient) {
    this.getProducts().subscribe({
    next: (data) => {
      this.stripeProducts = data;
      this.loading = false;
      this.displayProducts.set(this.stripeProducts);
    },
    error: (err) => {
      console.error(err);
      this.error = "Could not load products.";
      this.loading = false;
    },
  });
  }

  loading = true;
  error = "";

  async startCheckout(priceId: string) {
    const res = await firstValueFrom(
      this.http.post<{url: string}>('/api/create-checkout-session', {
        priceId,
      })
    );
    window.location.href = res.url;
  }

  async startCheckoutWithVariant(items: PurchaseData[]) {
    const res = await firstValueFrom(
      this.http.post<{ url: string }>(
        "/api/create-checkout-session",
        items
      )
    );
    console.log(res.url)
    window.location.href = res.url;

  }

  async getSessionStatus(sessionId: string) {
    return firstValueFrom(
      this.http.get<{ status: string; payment_status: string }>(
        `/api/session-status`,
        { params: { session_id: sessionId } }
      )
    );
  }

  addProduct(id: number, product: StripeProduct) {
    this.products.push({id: id, product: product});
    this.current.set(this.products);
    this.count.set(this.products.length);
    this.total.update(() =>
      this.current().reduce((sum, p) => sum + (p.product.price?.unit_amount ?? 0)/100, 0))

  }

  addPurchase(purchase: Purchase) {
    this.products.push(purchase);
    this.count.set(this.products.length);
    this.current.set(this.products);
    this.total.update(() =>
      this.current().reduce((sum, p) => sum + (p.product.price?.unit_amount ?? 0)/100, 0))
  }

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id != id)
    this.count.set(this.products.length);
    this.current.set(this.products)
    this.total.update(() =>
      this.current().reduce((sum, p) => sum + (p.product.price?.unit_amount ?? 0)/100, 0))
  }

  getProducts(): Observable<StripeProduct[]> {
    return this.http.get<StripeProduct[]>('/api/stripe-products');
  }

  startPurchase(){
    let items: PurchaseData[] = [];

    this.products.forEach(p => {items.push({priceId: p.product.price.priceId, itemType: p.product.productMetadata["size"], size: p.product.productMetadata["size"]});});
    console.log("test" + JSON.stringify(items));
    this.startCheckoutWithVariant(items)
  }

}

export interface StripeProduct {
  productId: string;
  name: string;
  description: string | null;
  images: string[];
  active: boolean;
  price: ItemPrice;
  variants: VariantOption[];
  productMetadata: { [key: string]: any };
}

export interface VariantOption {
  size: string;      // "S", "M", "L"
  type: string;      // "hoodie", "tshirt", "mug", ...
}

export interface ItemPrice {
  priceId: string;
  currency: string;
  unit_amount: number; // cents
}

export interface Purchase {
  id: number;
  product: StripeProduct;
}

export interface PurchaseData {
  priceId: string;
  size: string;
  itemType: string;
}
