import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ButtonComponent } from '@includes/button/components/root/button.component';
import { ErrorLoadingDataComponent } from '@includes/error-loading-data/components/root/error-loading-data.component';
import { LoaderComponent } from '@includes/loader/components/root/loader.component';
import { ProductService } from '@core/services/product/product.service';
import { ObservableQueryResult } from '@ngneat/query';
import { Product } from '@core/types/product/product';
import { MainLayoutComponent } from '@layouts/core/main-layout/components/root/main-layout.component';
import { CategoriesComponent } from '@pages/shop/components/categories/components/root/categories.component';
import { ShopGridComponent } from '@pages/shop/components/shop-grid/components/root/shop-grid.component';
import { ProductGalleryComponent } from '@pages/product/components/product-gallery/product-gallery.component';
import { ProductBodyComponent } from '@pages/product/components/product-body/product-body.component';

@Component({
  selector: 'oc-client-product',
  standalone: true,
  imports: [
    AsyncPipe,
    ButtonComponent,
    ErrorLoadingDataComponent,
    LoaderComponent,
    MainLayoutComponent,
    CategoriesComponent,
    ShopGridComponent,
    ProductGalleryComponent,
    ProductBodyComponent,
  ],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  productService = inject(ProductService);
  public result$: ObservableQueryResult<Product>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    this.result$ = this.productService.getProductById(productId || '').result$;
    this.result$.subscribe((r) => console.log(r.data));
  }
}
