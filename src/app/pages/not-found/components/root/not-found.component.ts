import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'oc-client-not-found',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
