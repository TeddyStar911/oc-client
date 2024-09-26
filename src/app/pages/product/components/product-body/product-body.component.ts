import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Product } from '@core/types/product/product';
import { ProductTypes } from '@core/enums/product/product-types';
import { AsyncPipe, NgIf } from '@angular/common';
import { ProductTileComponent } from '@includes/product-tile/components/root/product-tile.component';
import { ProductVariationsComponent } from '@includes/product-variations/product-variations.component';
import { VariationStateService } from '@core/services/variation-state/variation-state.service';

@Component({
  selector: 'oc-client-product-body',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    ProductTileComponent,
    AsyncPipe,
    ProductVariationsComponent,
    ProductVariationsComponent,
  ],
  templateUrl: './product-body.component.html',
})
export class ProductBodyComponent implements OnInit {
  @Input() product: Product;
  isVariableProduct: boolean;

  constructor(public variationStateService: VariationStateService) {}

  get name(): string {
    return this.isVariableProduct
      ? this.variationStateService.activeVariation.name
      : this.product.name;
  }

  get price(): number {
    return this.isVariableProduct
      ? this.variationStateService.activeVariation.price
      : this.product.regular_price;
  }

  ngOnInit() {
    this.variationCheck(this.product.type);
    if (this.isVariableProduct) {
      this.variationStateService.activeVariation = this.product.variations[0];
      this.variationStateService.activeVariationSku =
        this.product.variations[0].sku;
    }
  }

  private variationCheck(productType: ProductTypes) {
    this.isVariableProduct = productType === ProductTypes.Variable;
  }
}
