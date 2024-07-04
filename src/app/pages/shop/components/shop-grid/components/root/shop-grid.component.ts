import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CategoryItemComponent } from '@pages/shop/components/categories/components/category-item/category-item.component';
import { ErrorLoadingDataComponent } from '@includes/error-loading-data/components/root/error-loading-data.component';
import { LoaderComponent } from '@includes/loader/components/root/loader.component';
import { ObservableQueryResult } from '@ngneat/query';
import { ProductService } from '@core/services/product/product.service';
import { Product } from '@core/types/product/product';
import { ProductTileComponent } from '@includes/product-tile/components/root/product-tile.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'oc-client-shop-grid',
  standalone: true,
  imports: [
    AsyncPipe,
    CategoryItemComponent,
    ErrorLoadingDataComponent,
    LoaderComponent,
    ProductTileComponent,
  ],
  templateUrl: './shop-grid.component.html',
})
export class ShopGridComponent implements OnInit {
  productService = inject(ProductService);
  public products$: ObservableQueryResult<Product[]> | undefined;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const categoryId = params['category'];
      console.log(categoryId);
      this.products$ = this.productService.getProducts(categoryId).result$;
      this.products$.subscribe((r) => console.log(r.data, 'Products'));
    });
  }
}
