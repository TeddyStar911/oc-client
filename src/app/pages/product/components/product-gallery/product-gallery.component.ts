import { Component, Input, OnInit } from '@angular/core';
import { ProductImage } from '@core/types/product/product-image';
import { GalleryComponent, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'oc-client-product-gallery',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './product-gallery.component.html',
})
export class ProductGalleryComponent implements OnInit {
  @Input() gallery?: ProductImage[];
  images: GalleryItem[];

  ngOnInit() {
    this.galleryAdapter();
  }

  private galleryAdapter() {
    this.images =
      this.gallery?.map(
        (image) => new ImageItem({ src: image.src, thumb: image.src }),
      ) || [];
  }
}
