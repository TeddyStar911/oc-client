import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'oc-client-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}
