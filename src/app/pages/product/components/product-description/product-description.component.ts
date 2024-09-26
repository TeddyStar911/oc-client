import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'oc-client-product-description',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './product-description.component.html',
})
export class ProductDescriptionComponent {
  @Input() description: string;
}
