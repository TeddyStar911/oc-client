import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'oc-client-product-tile-name',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './product-tile-name.component.html',
})
export class ProductTileNameComponent {
  @Input() name: string;
}
