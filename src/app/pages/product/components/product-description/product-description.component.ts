import { Component, Input } from '@angular/core';

@Component({
  selector: 'oc-client-product-description',
  standalone: true,
  imports: [],
  templateUrl: './product-description.component.html',
})
export class ProductDescriptionComponent {
  @Input() description: string;
}
