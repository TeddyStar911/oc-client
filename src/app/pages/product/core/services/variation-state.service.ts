import { Injectable } from '@angular/core';
import { ProductVariation } from '@core/types/product/product-variation';

@Injectable({
  providedIn: 'root',
})
export class VariationStateService {
  public activeVariation: ProductVariation;
  public activeVariationSku: string;
  constructor() {}
}
