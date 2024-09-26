import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductVariation } from '@core/types/product/product-variation';
import { NgClass, NgForOf } from '@angular/common';
import { VariationStateService } from '@core/services/variation-state/variation-state.service';

@Component({
  selector: 'oc-client-product-variations',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgForOf, NgClass],
  templateUrl: './product-variations.component.html',
})
export class ProductVariationsComponent {
  @Input() variations: ProductVariation[];

  constructor(public variationStateService: VariationStateService) {}

  onVariationChange(event: Event, variation: ProductVariation) {
    event.preventDefault();
    event.stopPropagation();
    this.variationStateService.activeVariation = variation;
    this.variationStateService.activeVariationSku = variation.sku;
  }
}
