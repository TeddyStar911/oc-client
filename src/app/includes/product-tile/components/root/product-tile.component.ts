import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@core/types/product/product';
import { NgClass, NgIf } from '@angular/common';
import { ProductTilePricesComponent } from '@includes/product-tile/components/product-tile-prices/product-tile-prices.component';
import { ProductTileNameComponent } from '@includes/product-tile/components/product-tile-name/product-tile-name.component';
import { ProductTileImageComponent } from '@includes/product-tile/components/product-tile-image/product-tile-image.component';

@Component({
  selector: 'oc-client-product-tile',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgClass,
    ProductTilePricesComponent,
    ProductTileNameComponent,
    ProductTileImageComponent,
  ],
  templateUrl: './product-tile.component.html',
})
export class ProductTileComponent {
  @Input() product: Product;
}
