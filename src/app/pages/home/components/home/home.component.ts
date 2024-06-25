import { Component } from '@angular/core';
import { MainLayoutComponent } from '@layouts/Core/MainLayout/Components/main-layout/main-layout.component';

@Component({
  selector: 'oc-client-home',
  standalone: true,
  imports: [MainLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
