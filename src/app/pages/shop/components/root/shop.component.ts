import { Component } from '@angular/core';
import { MainLayoutComponent } from '@layouts/core/main-layout/components/root/main-layout.component';

@Component({
  selector: 'oc-client-shop',
  standalone: true,
  imports: [MainLayoutComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {}
