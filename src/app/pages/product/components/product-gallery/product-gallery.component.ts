import { Component, Input } from '@angular/core';
import { ProductImage } from '@core/types/product/product-image';

@Component({
  selector: 'oc-client-product-gallery',
  standalone: true,
  imports: [],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss',
})
export class ProductGalleryComponent {
  @Input() gallery?: ProductImage[];
}
