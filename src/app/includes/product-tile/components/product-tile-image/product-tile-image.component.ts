import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ProductImage } from '@core/types/product/product-image';

@Component({
  selector: 'oc-client-product-tile-image',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './product-tile-image.component.html',
})
export class ProductTileImageComponent implements OnInit {
  @Input() image?: ProductImage;
  primaryImage: string = '';

  ngOnInit(): void {
    this.primaryImage = this.image?.src || '';
  }
}
