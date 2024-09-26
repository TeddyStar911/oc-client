import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { GalleryComponent, GalleryItem, ImageItem } from 'ng-gallery';
import { ProductTypes } from '@core/enums/product/product-types';
import { Product } from '@core/types/product/product';
import { VariationStateService } from '@core/services/variation-state/variation-state.service';

@Component({
  selector: 'oc-client-product-gallery',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GalleryComponent],
  templateUrl: './product-gallery.component.html',
})
export class ProductGalleryComponent implements OnInit {
  @Input() product: Product;
  isVariableProduct: boolean;

  get images(): GalleryItem[] {
    const imageList =
      this.product.images?.map((image) =>
        this.getImageItem(image.src, image.src),
      ) || [];
    if (this.isVariableProduct) {
      imageList.unshift(
        this.getImageItem(
          this.variationStateService.activeVariation.image.src,
          this.variationStateService.activeVariation.image.src,
        ),
      );
    } else {
      imageList.unshift(
        this.getImageItem(
          this.product.primary_image.src,
          this.product.primary_image.src,
        ),
      );
    }

    return imageList;
  }

  constructor(public variationStateService: VariationStateService) {}

  ngOnInit() {
    this.variationCheck(this.product.type);
  }

  private variationCheck(productType: ProductTypes) {
    this.isVariableProduct = productType === ProductTypes.Variable;
  }

  private getImageItem(src: string, thumb: string) {
    return new ImageItem({
      src: src,
      thumb: thumb,
    });
  }
}
