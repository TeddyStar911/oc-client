import { Component, inject, Input, OnInit } from '@angular/core';
import { Product } from '@core/types/product/product';
import { ProductTypes } from '@core/enums/product/product-types';
import { ObservableQueryResult } from '@ngneat/query';
import { ProductVariation } from '@core/types/product/product-variation';
import { ProductService } from '@core/services/product/product.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { ProductTileComponent } from '@includes/product-tile/components/root/product-tile.component';
import { ProductVariationsComponent } from '@pages/product/components/product-variations/product-variations.component';

@Component({
  selector: 'oc-client-product-body',
  standalone: true,
  imports: [NgIf, ProductTileComponent, AsyncPipe, ProductVariationsComponent],
  templateUrl: './product-body.component.html',
})
export class ProductBodyComponent implements OnInit {
  @Input() product: Product;
  @Input() isVariableProduct: boolean;
  productService = inject(ProductService);
  public variationResult$: ObservableQueryResult<ProductVariation[]>;

  ngOnInit() {
    this.variationCheck(this.product.type, String(this.product.id));
  }

  private variationCheck(productType: ProductTypes, productId: string) {
    this.isVariableProduct = productType === ProductTypes.Variable;
    if (this.isVariableProduct) {
      this.loadVariations(productId);
    }
  }

  private loadVariations(productId: string) {
    this.variationResult$ =
      this.productService.getProductVariations(productId).result$;
    this.variationResult$.subscribe((r) => console.log(r.data, 'Variations'));
  }
}
