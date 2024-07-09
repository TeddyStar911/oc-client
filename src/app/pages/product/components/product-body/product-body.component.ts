import { Component, Input } from '@angular/core';
import { Product } from '@core/types/product/product';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'oc-client-product-body',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './product-body.component.html',
  styleUrl: './product-body.component.scss',
})
export class ProductBodyComponent {
  @Input() product?: Product;
}
