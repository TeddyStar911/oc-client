import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductVariation } from '@core/types/product/product-variation';
import { MatRadioModule } from '@angular/material/radio';
import { VariationStateService } from '@pages/product/core/services/variation-state.service';

@Component({
  selector: 'oc-client-product-variations',
  standalone: true,
  imports: [MatRadioModule],
  templateUrl: './product-variations.component.html',
})
export class ProductVariationsComponent implements OnChanges {
  @Input() variations: ProductVariation[];

  constructor(public variationStateService: VariationStateService) {}

  ngOnChanges(changes: SimpleChanges) {
    const defaultVariation = changes['variations']
      .currentValue[0] as ProductVariation;
    this.variationStateService.activeVariation = defaultVariation;
    this.variationStateService.activeVariationSku = defaultVariation.sku;
  }
}
