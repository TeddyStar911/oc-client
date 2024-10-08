import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@layouts/elements/header/components/root/header.component';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'oc-client-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MatListModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
