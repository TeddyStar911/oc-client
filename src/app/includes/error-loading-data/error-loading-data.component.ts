import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'oc-client-error-loading-data',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './error-loading-data.component.html',
})
export class ErrorLoadingDataComponent {
  @Input() message: string = '';
}
