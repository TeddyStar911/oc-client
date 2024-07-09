import { Component, Input } from '@angular/core';
import { ProductTileComponent } from '@includes/product-tile/components/root/product-tile.component';
import { Product } from '@core/types/product/product';

@Component({
  selector: 'oc-client-best-seller-grid',
  standalone: true,
  imports: [ProductTileComponent],
  templateUrl: './best-seller-grid.component.html',
})
export class BestSellerGridComponent {
  @Input() products: Product[];
}
