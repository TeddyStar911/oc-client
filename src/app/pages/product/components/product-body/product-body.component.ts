import { Component, Input } from '@angular/core';
import { Product } from '@core/types/product/product';

@Component({
  selector: 'oc-client-product-body',
  standalone: true,
  imports: [],
  templateUrl: './product-body.component.html',
})
export class ProductBodyComponent {
  @Input() product: Product;
}
