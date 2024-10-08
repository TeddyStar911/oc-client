import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { CategoryItemComponent } from '@pages/shop/components/categories/components/category-item/category-item.component';
import { ErrorLoadingDataComponent } from '@includes/error-loading-data/error-loading-data.component';
import { LoaderComponent } from '@includes/loader/loader.component';
import { ObservableQueryResult } from '@ngneat/query';
import { ProductService } from '@core/services/product/product.service';
import { Product } from '@core/types/product/product';
import { ProductTileComponent } from '@includes/product-tile/components/root/product-tile.component';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '@includes/button/button.component';
import { Subject, takeUntil } from 'rxjs';
import { environment } from '@environments/environment';

@Component({
  selector: 'oc-client-shop-grid',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [
    AsyncPipe,
    CategoryItemComponent,
    ErrorLoadingDataComponent,
    LoaderComponent,
    ProductTileComponent,
    ButtonComponent,
    NgIf,
  ],
  templateUrl: './shop-grid.component.html',
})
export class ShopGridComponent implements OnInit, OnDestroy {
  public unsubscribe$ = new Subject();
  public result$: ObservableQueryResult<Product[]>;
  public productCount: number;
  public displayLoadMoreButton: boolean = false;
  public allProducts: Product[];
  public products: Product[];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  showAllProducts() {
    this.products = this.allProducts;
    this.displayLoadMoreButton = false;
  }

  private loadProducts() {
    this.activatedRoute.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params) => {
        const categoryId = params['category'];
        this.result$ =
          this.productService.getProductByCategory(categoryId).result$;
        this.setProductsDetail();
      });
  }

  private setProductsDetail() {
    this.result$.subscribe((result) => {
      if (result.data) {
        this.allProducts = result.data;
        this.productCount = result.data?.length || 0;
        this.products = result.data?.slice(0, environment.PRODUCTS_PER_PAGE);
        this.displayLoadMoreButton =
          this.productCount > environment.PRODUCTS_PER_PAGE;
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
