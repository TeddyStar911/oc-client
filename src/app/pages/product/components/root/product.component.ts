import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ButtonComponent } from '@includes/button/button.component';
import { ErrorLoadingDataComponent } from '@includes/error-loading-data/error-loading-data.component';
import { LoaderComponent } from '@includes/loader/loader.component';
import { ProductService } from '@core/services/product/product.service';
import { ObservableQueryResult } from '@ngneat/query';
import { Product } from '@core/types/product/product';
import { MainLayoutComponent } from '@layouts/core/main-layout/components/root/main-layout.component';
import { CategoriesComponent } from '@pages/shop/components/categories/components/root/categories.component';
import { ShopGridComponent } from '@pages/shop/components/shop-grid/shop-grid.component';
import { ProductGalleryComponent } from '@pages/product/components/product-gallery/product-gallery.component';
import { ProductBodyComponent } from '@pages/product/components/product-body/product-body.component';
import { ProductDescriptionComponent } from '@pages/product/components/product-description/product-description.component';

@Component({
  selector: 'oc-client-product',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    ProductDescriptionComponent,
  ],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  public result$: ObservableQueryResult<Product>;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    const productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.result$ = this.productService.getProductById(productId || '').result$;
    this.result$.subscribe((r) => console.log(r.data, 'Product2'));
  }
}
