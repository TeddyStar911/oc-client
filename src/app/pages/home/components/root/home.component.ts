import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainLayoutComponent } from '@layouts/core/main-layout/components/root/main-layout.component';
import { CategoriesComponent } from '@pages/shop/components/categories/components/root/categories.component';
import { HomeBannerComponent } from '@pages/home/components/home-banner/home-banner.component';
import { BestSellerComponent } from '@pages/home/components/best-seller/components/root/best-seller.component';

@Component({
  selector: 'oc-client-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MainLayoutComponent,
    HomeBannerComponent,
    CategoriesComponent,
    BestSellerComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
