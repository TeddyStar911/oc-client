import { Component, Input } from '@angular/core';

@Component({
  selector: 'oc-client-product-tile-name',
  standalone: true,
  imports: [],
  templateUrl: './product-tile-name.component.html',
  styleUrl: './product-tile-name.component.scss',
})
export class ProductTileNameComponent {
  @Input() productName?: string;
}
