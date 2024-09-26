import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'oc-client-category-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatRadioButton],
  templateUrl: './category-item.component.html',
})
export class CategoryItemComponent {
  @Input() name: string;
  @Input() id: string;
  @Input() checked: boolean;
}
