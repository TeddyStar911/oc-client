import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@layouts/elements/header/components/root/header.component';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'oc-client-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MatListModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
