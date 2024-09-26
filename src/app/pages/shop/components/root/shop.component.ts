import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainLayoutComponent } from '@layouts/core/main-layout/components/root/main-layout.component';
import { CategoriesComponent } from '@pages/shop/components/categories/components/root/categories.component';
import { ShopGridComponent } from '@pages/shop/components/shop-grid/shop-grid.component';

@Component({
  selector: 'oc-client-shop',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MainLayoutComponent, CategoriesComponent, ShopGridComponent],
  templateUrl: './shop.component.html',
})
export class ShopComponent {}
