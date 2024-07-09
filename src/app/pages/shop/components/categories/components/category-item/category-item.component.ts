import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'oc-client-category-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-item.component.html',
})
export class CategoryItemComponent {
  @Input() name: string;
  @Input() id: number;
}
