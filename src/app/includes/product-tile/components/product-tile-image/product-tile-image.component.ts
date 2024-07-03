import { Component, Input, OnInit } from '@angular/core';
import { ProductImage } from '@core/types/product/product-image';

@Component({
  selector: 'oc-client-product-tile-image',
  standalone: true,
  imports: [],
  templateUrl: './product-tile-image.component.html',
  styleUrl: './product-tile-image.component.scss',
})
export class ProductTileImageComponent implements OnInit {
  @Input() productImages: ProductImage[] = [];
  primaryImage: string = '';

  ngOnInit(): void {
    this.primaryImage = this.productImages[0].src || '';
  }
}
