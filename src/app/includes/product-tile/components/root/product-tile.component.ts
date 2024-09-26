import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@core/types/product/product';
import { NgClass, NgIf } from '@angular/common';
import { ProductTilePricesComponent } from '@includes/product-tile/components/product-tile-prices/product-tile-prices.component';
import { ProductTileNameComponent } from '@includes/product-tile/components/product-tile-name/product-tile-name.component';
import { ProductTileImageComponent } from '@includes/product-tile/components/product-tile-image/product-tile-image.component';
import { ProductTypes } from '@core/enums/product/product-types';
import { ProductImage } from '@core/types/product/product-image';
import { VariationStateService } from '@core/services/variation-state/variation-state.service';
import { ProductVariationsComponent } from '@includes/product-variations/product-variations.component';

@Component({
  selector: 'oc-client-product-tile',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    NgIf,
    NgClass,
    ProductTilePricesComponent,
    ProductTileNameComponent,
    ProductTileImageComponent,
    ProductVariationsComponent,
  ],
  templateUrl: './product-tile.component.html',
})
export class ProductTileComponent implements OnInit {
  @Input() product: Product;
  @Input() classes: string;
  isVariableProduct: boolean;

  constructor(public variationStateService: VariationStateService) {}

  get name(): string {
    return this.isVariableProduct
      ? this.variationStateService.activeVariation.name
      : this.product.name;
  }

  get image(): ProductImage {
    return this.isVariableProduct
      ? this.variationStateService.activeVariation.image
      : this.product.primary_image;
  }

  get price(): number {
    return this.isVariableProduct
      ? this.variationStateService.activeVariation.price
      : this.product.price;
  }

  get regularPrice(): number {
    return this.isVariableProduct
      ? this.variationStateService.activeVariation.regular_price
      : this.product.regular_price;
  }

  ngOnInit() {
    this.isVariableProduct = this.product.type === ProductTypes.Variable;
    if (this.isVariableProduct) {
      this.variationStateService.activeVariation = this.product.variations[0];
      this.variationStateService.activeVariationSku =
        this.product.variations[0].sku;
    }
  }
}
