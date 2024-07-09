import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'oc-client-product-tile-prices',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-tile-prices.component.html',
})
export class ProductTilePricesComponent {
  @Input() regularPrice: number;
  @Input() price: number;
}
