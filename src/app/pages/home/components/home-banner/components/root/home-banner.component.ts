import { Component, inject, OnInit } from '@angular/core';
import { ButtonComponent } from '@includes/button/components/root/button.component';
import { ObservableQueryResult } from '@ngneat/query';
import { Product } from '@core/types/product/product';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { BestSellerGridComponent } from '@pages/home/components/best-seller/components/best-seller-grid/best-seller-grid.component';
import { ErrorLoadingDataComponent } from '@includes/error-loading-data/components/root/error-loading-data.component';
import { LoaderComponent } from '@includes/loader/components/root/loader.component';
import { TagService } from '@core/services/tag/tag-service.service';

@Component({
  selector: 'oc-client-home-banner',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterLink,
    AsyncPipe,
    BestSellerGridComponent,
    ErrorLoadingDataComponent,
    LoaderComponent,
  ],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss',
})
export class HomeBannerComponent implements OnInit {
  tagService = inject(TagService);
  public products$: ObservableQueryResult<Product[]> | undefined;
  public mainProduct?: Product;

  ngOnInit(): void {
    this.products$ = this.tagService.getTagById(23).result$;
    this.products$.subscribe((result) => {
      this.mainProduct = (result?.data &&
        result.data.length &&
        result.data[0]) as Product;
    });
  }
}
