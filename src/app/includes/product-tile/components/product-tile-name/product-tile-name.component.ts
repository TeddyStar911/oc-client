import { Component, Input } from '@angular/core';

@Component({
  selector: 'oc-client-product-tile-name',
  standalone: true,
  imports: [],
  templateUrl: './product-tile-name.component.html',
})
export class ProductTileNameComponent {
  @Input() productName: string;
}
