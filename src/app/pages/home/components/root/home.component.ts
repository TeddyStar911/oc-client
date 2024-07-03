import { Component } from '@angular/core';
import { MainLayoutComponent } from '@layouts/core/main-layout/components/root/main-layout.component';
import { CategoriesComponent } from '@pages/shop/components/categories/components/root/categories.component';
import { HomeBannerComponent } from '@pages/home/components/home-banner/components/root/home-banner.component';
import { BestSellerComponent } from '@pages/home/components/best-seller/components/root/best-seller.component';

@Component({
  selector: 'oc-client-home',
  standalone: true,
  imports: [
    MainLayoutComponent,
    HomeBannerComponent,
    CategoriesComponent,
    BestSellerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
